# React Madlibs

A fun and interactive Madlibs game built with React + Vite!  
Originally adapted from a Python Flask version.

## Installation

1. Clone the repo  
```bash
   git clone https://github.com/aracope/mad-libs-react-assessment.git
   cd mad-libs-react-assessment
```
2. Install dependencies
```bash
npm install
```
3. Start the dev server
```bash
npm run dev
```
4. Open http://localhost:5173 in your browser to play!

## Built With
- React
- Vite

## Tests

This project uses Jest and React Testing Library.
1. To run tests
```bash
npm test
```

## Project Structure
```bash
my-vite-madlibs/
├── babel.config.js
├── eslint.config.js
├── index.html
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
├── setupTests.js
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── MadlibForm.jsx
│   ├── MadlibStory.jsx
│   ├── main.jsx
│   └── stories.js
├── __tests__
│   ├── App.test.jsx
│   ├── MadlibForm.test.jsx
│   └── MadlibStory.test.jsx
└── vite.config.js
```

## Tests

This project uses Jest and React Testing Library.

Tests cover:
- Form rendering and input validation
- Story rendering logic
- App flow from input to story display

To run tests:
```bash
npm test
```

## Styling
Basic CSS used for layout and visuals. Easily customizable!

## Features
- Choose between different story templates

- Validates input length (≥ 3 characters)

- Displays completed story

- “Restart” button to play again

## Future Ideas
- Add themes or story images

- Track history of stories filled out

- Add random story mode

## Acknowledgments
Inspired by a Flask-based version built earlier in my coding journey.


