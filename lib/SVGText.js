class SVGText {
  constructor(text, colour) {
    this.text = text.toUpperCase();
    this.colour = colour;
  }

  render() {
    return `<text x="50%" y="50%" font-size="6rem" alignment-baseline="middle" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
  }
}

module.exports = { SVGText };
