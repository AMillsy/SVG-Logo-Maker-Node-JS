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
    return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
  }
}

class Rectangle extends Shape {
  constructor(colour) {
    super(colour);
  }
  render() {
    return `<rect x="50" y="20" width="150" height="150" fill="${this.colour}" />`;
  }
}

class Triangle extends Shape {
  constructor(colour) {
    super(colour);
  }
  render() {
    return `<polygon points="250,60 100,400 400,400" fill="${this.colour} />`;
  }
}

module.exports = { Circle, Triangle, Rectangle };