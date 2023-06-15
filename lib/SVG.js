class SVG {
  constructor(shapeSVG, textSVG) {
    this.shape = shapeSVG;
    this.text = textSVG;
  }

  renderSVG() {
    const SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shape}
    ${this.text}
    </svg>`;

    return SVG;
  }
}

module.exports = { SVG };
