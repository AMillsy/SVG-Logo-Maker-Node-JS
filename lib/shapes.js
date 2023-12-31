class Shape {
  constructor(colour) {
    this.colour = colour;
  }

  render() {
    return "Rendering can only happen on the children classes";
  }
}

class Circle extends Shape {
  constructor(colour) {
    super(colour);
  }

  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.colour}" />`;
  }
}

class Square extends Shape {
  constructor(colour) {
    super(colour);
  }
  render() {
    return `<rect x="50" width="200" height="200" fill="${this.colour}" />`;
  }
}

class Triangle extends Shape {
  constructor(colour) {
    super(colour);
  }
  render() {
    return `<polygon points="150,0 0,150 300,150" fill="${this.colour}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
