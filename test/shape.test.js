const { Square, Triangle, Circle } = require("../lib/shapes");

describe(`Shapes`, () => {
  describe(`Square`, () => {
    it(`Should render a SVG Blue Square Element`, () => {
      const colour = "blue";
      const shape = new Square(colour);
      const expectResult = `<rect x="50" width="200" height="200" fill="${colour}" />`;

      expect(shape.render()).toEqual(expectResult);
    });
    it(`Should render a SVG purple Square Element`, () => {
      const colour = "purple";
      const shape = new Square(colour);
      const expectResult = `<rect x="50" width="200" height="200" fill="${colour}" />`;

      expect(shape.render()).toEqual(expectResult);
    });
  });
});

describe(`Shapes`, () => {
  describe(`Circle`, () => {
    it(`Should render a SVG Red Circle Element`, () => {
      const colour = "red";
      const shape = new Circle(colour);
      const expectResult = `<circle cx="150" cy="100" r="100" fill="${colour}" />`;

      expect(shape.render()).toEqual(expectResult);
    });
    it(`Should render a SVG yellow Circle Element`, () => {
      const colour = "yellow";
      const shape = new Circle(colour);
      const expectResult = `<circle cx="150" cy="100" r="100" fill="${colour}" />`;

      expect(shape.render()).toEqual(expectResult);
    });
  });
});

describe(`Shapes`, () => {
  describe(`Triangle`, () => {
    it(`Should render a SVG yellow Triangle Element`, () => {
      const colour = "yellow";
      const shape = new Triangle(colour);
      const expectResult = `<polygon points="150,0 0,150 300,150" fill="${colour}" />`;

      expect(shape.render()).toEqual(expectResult);
    });
    it(`Should render a SVG orange Triangle Element`, () => {
      const colour = "orange";
      const shape = new Triangle(colour);
      const expectResult = `<polygon points="150,0 0,150 300,150" fill="${colour}" />`;

      expect(shape.render()).toEqual(expectResult);
    });
  });
});
