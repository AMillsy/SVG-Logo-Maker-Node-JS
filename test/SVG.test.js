const { SVG } = require("../lib/SVG");
const { SVGText } = require("../lib/SVGText");
const { Square } = require("../lib/shapes");

describe("SVG", () => {
  it("Should create an SVG Element that is a blue square with text saying DAD that is white", () => {
    const shapeColour = "blue";
    const text = "DAD";
    const textColour = "white";

    const svgShape = new Square(shapeColour).render();
    const svgText = new SVGText(text, textColour).render();
    const expectResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShape}
    ${svgText}
    </svg>`;

    expect(new SVG(svgShape, svgText).renderSVG()).toEqual(expectResult);
  });
  it("Should create an SVG Element that is a orange square with text saying JOB that is blue", () => {
    const shapeColour = "orange";
    const text = "JOB";
    const textColour = "blue";

    const svgShape = new Square(shapeColour).render();
    const svgText = new SVGText(text, textColour).render();
    const expectResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShape}
    ${svgText}
    </svg>`;

    expect(new SVG(svgShape, svgText).renderSVG()).toEqual(expectResult);
  });
});
