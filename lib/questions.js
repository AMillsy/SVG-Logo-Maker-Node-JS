const questions = [
  {
    type: "maxlength-input",
    name: "text",
    message: "What is your text for your logo?",
    maxLength: 3,
  },
  {
    type: "input",
    name: "textColour",
    message: "What colour do you want the text to be?",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like for your logo?",
    choices: ["Square", "Triangle", "Circle"],
  },
  {
    type: "input",
    name: "shapeColour",
    message: "What colour do you want the shape to be?",
  },
];

module.exports = questions;
