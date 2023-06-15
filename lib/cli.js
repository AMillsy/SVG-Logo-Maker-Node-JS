const inquirer = require("inquirer");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", maxLengthInputPrompt);

const questions = require("./questions");
const { writeFile } = require("fs/promises");

class CLI {
  constructor() {}

  run() {}
}

module.exports = CLI;
