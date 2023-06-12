const inquirer = require("inquirer");
const questions = require("./utils/questions");
const SVGMaker = require("./utils/SVGMaker");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require("fs");

inquirer.registerPrompt("maxlength-input", maxLengthInputPrompt);

function init() {
  inquirer.prompt(questions).then((response) => createSVG(response));
}

function createSVG(data) {
  const svg = SVGMaker(data);

  fs.writeFile("logo.svg", svg, (err) =>
    err ? console.error(err) : console.log("Success")
  );
}

init();
