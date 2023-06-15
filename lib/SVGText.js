class SVGText {
  constructor(text, colour) {
    this.text = text;
    this.colour = colour;
  }

  render() {
    return `<text x="0" y="15" fill="${this.colour}">${this.text}</text>`;
  }
}
