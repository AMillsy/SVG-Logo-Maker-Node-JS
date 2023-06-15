inquirer.registerPrompt("maxlength-input", maxLengthInputPrompt);

function init() {
  inquirer.prompt(questions).then((response) => "Create the SVG");
}

function createSVG(data) {
  const svg = SVGMaker(data);

  fs.writeFile("logo.svg", svg, (err) =>
    err ? console.error(err) : console.log("Success")
  );
}

init();
