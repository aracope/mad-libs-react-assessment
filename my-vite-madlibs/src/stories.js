// There was a madlibs assignment from the Flask section. I have reformatted that project to the best of my abilities, to react.
export const stories = {
  adventure: {
    prompts: ["place", "noun", "verb", "adjective", "plural noun"],
    template:
      "Once upon a time in {place}, a {adjective} {noun} loved to {verb} {plural noun}.",
  },
  fantasy: {
    prompts: ["creature", "weapon", "magic", "adjective"],
    template:
      "The {adjective} {creature} wielded a {weapon} and cast {magic} spells.",
  },
  "sci-fi": {
    prompts: ["planet", "alien_species", "verb", "gadget"],
    template:
      "On {planet}, the {alien_species} learned to {verb} using a {gadget}.",
  },
  "murder mystery": {
    prompts: ["murderer", "victim", "location", "weapon", "suspect"],
    template:
      "{murderer} killed the {victim} in the {location} with a {weapon}.",
  },
  horror: {
    prompts: ["creature", "location", "adjective", "verb", "noun"],
    template:
      "Late at night, the {creature} lurked in the {location}, its {adjective} eyes glowing as it {verb} a {noun}.",
  },
  romance: {
    prompts: ["person", "place", "emotion", "verb", "adjective"],
    template:
      "In {place}, {person} met someone who made them feel {emotion}, and they {verb} together under the {adjective} moon.",
  },
  western: {
    prompts: ["cowboy", "horse", "place", "weapon", "adjective"],
    template:
      "The {adjective} {cowboy} rode their {horse} into {place}, ready for a showdown with their trusty {weapon}.",
  },
  "fairy tale": {
    prompts: ["princess", "place", "evil creature", "action", "magical item"],
    template:
      "The {princess} escaped from the {place}, chased by an {evil creature}, but she used her {magical item} to {action}.",
  },
  sports: {
    prompts: ["team", "sport", "adjective", "action", "opponent"],
    template:
      "{team} played a {adjective} game of {sport}, {action} against their toughest opponent yet.",
  },
  superhero: {
    prompts: ["superhero", "power", "villain", "city", "action"],
    template:
      "In the heart of {city}, {superhero} used their {power} to stop the {villain} from {action}.",
  },
};
