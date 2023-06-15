class SVGText {
  constructor(text, colour) {
    this.text = text;
    this.colour = colour;
  }

  render() {
    return `<text x="50%" y="50%" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
  }
}

module.exports = { SVGText };
