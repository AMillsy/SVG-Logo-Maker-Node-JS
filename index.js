const inquirer = require("inquirer");
const questions = require("./utils/questions");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require("fs");
const { create } = require("domain");

inquirer.registerPrompt("maxlength-input", maxLengthInputPrompt);

function init() {
  inquirer.prompt(questions).then((response) => createSVG(response));
}

function createSVG(data) {}

init();
