const inquirer = require("inquirer");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", maxLengthInputPrompt);

const questions = require("./questions");
const { writeFile } = require("fs/promises");
const { Circle, Triangle, Square } = require("./shapes");
const { SVGText } = require("./SVGText");

class CLI {
  constructor() {}

  run() {
    inquirer.prompt(questions).then((response) => this.createSVG(response));
  }

  createSVG(data) {
    const obj = {
      Square: (...args) => new Square(...args),
      Circle: (...args) => new Circle(...args),
      Triangle: (...args) => new Triangle(...args),
    };

    const shape = obj[data.shape];
    const svgShape = shape(data.shapeColour).render();

    const text = new SVGText(data.text, data.textColour);
    const svgText = text.render();

    this.writeToFile(this.renderSVG(svgShape, svgText));
  }

  renderSVG(shape, text) {
    const SVG = `<svg width="150" height="150">
    ${shape}
    ${text}
    </svg>`;

    return SVG;
  }

  writeToFile(SVG) {
    writeFile("logo.svg", SVG)
      .then(console.log("Success"))
      .catch((err) => console.error(err));
  }
}

module.exports = { CLI };
