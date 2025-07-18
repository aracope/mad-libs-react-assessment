### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    1. React is a JS library for building UI, especially single page applications.
    2. You would use React when:
        - you want reusable UI components
        - want efficient updates to DOM
        - buiding interactive web apps

- What is Babel?
    - Babel is a JS compiler that converts modern JS and JSX into code that is backward-compatible with old browsers

- What is JSX?
    - Stands for: JavaScript XML
    - allows devs to write HTML-like syntax directly into JS code; makes components easier to write and read
```jsx
const Hello = () => <h1>Hello, world!</h1>;
```

- How is a Component created in React?
    - Usually created using a function or arrow function
```jsx
function Greeting() {
  return <h1>Hello!</h1>;
}

const Greeting = () => <h1>Hello!</h1>;
```

- What are some difference between state and props?
    - State: 
        1. Mutable: Can change (useState or other hooks)
        2. Owned by itself: component updates/controls its own state
        3. Internal, dynamic data: changes as the user interacts with component
    - Props:
        1. Immutable: Cannot be changed by component receiving them.
        2. Doesn't own self; passed in from and controlled by parent
        3. External config: used to pass data or behavior to component

- What does "downward data flow" refer to in React?
    - Data flows one way in React- from parent to child via components like props. Children cannot change parent data unless a callback function is passed down.

- What is a controlled component?
    - A form element controlled by React state
```jsx
const [value, setValue] = useState("");
<input value={value} onChange={e => setValue(e.target.value)} />
```

- What is an uncontrolled component?
    - An uncontrolled component manages its own state using DOM; React doesn't control its value
```jsx
<input ref={inputRef} />
```

- What is the purpose of the `key` prop when rendering a list of components?
    - `key` helps React track which itmes changed were added or removed; prevents unnecessary re-renders 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    - If the list changed order, like items are added or removed, the index key could cause:
        - bugs
        - wrong items being reused
        - overall poor performance

    - A unique and stable ID is the best route

- Describe useEffect.  What use cases is it used for in React components?
    - useEffect lets you run side effects in function components like:
        - manually updating the DOM
        - data fetching
        - subscribing to events
```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Runs when count changes
```

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    - useRef stores a mutable value that does NOT cause re-render when updated. Use it to:
        - Access DOM nodes
        - Store values across renders (previous values, timers, etc...)

- When would you use a ref? When wouldn't you use one?
    - use ref when:
        - you need to store a value that survives re-render, but doesn't trigger a re-render
        - You need to interact with DOM directly
    - Avoid ref to:
        - Hold state that affects rendering (useState instead)
        - replace state/prop logic

- What is a custom hook in React? When would you want to write one?
    - a custom hook is a reusable function that uses built-in hooks (useState, useEffect) to hold logic. You'd write one to:
        - Reuse state logic across components
        - Clean up complex components
```jsx
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  return { count, increment };
}
```