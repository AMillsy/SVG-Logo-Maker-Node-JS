class SVG {
  constructor(shapeSVG, textSVG) {
    this.shape = shapeSVG;
    this.text = textSVG;
  }

  renderSVG() {
    const SVG = `<svg width="300" height="200">
    ${this.shape}
    ${this.text}
    </svg>`;

    return SVG;
  }
}

module.exports = { SVG };
