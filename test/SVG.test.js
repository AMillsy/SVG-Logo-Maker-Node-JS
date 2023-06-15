const { SVG } = require("../lib/SVG");
const { SVGText } = require("../lib/SVGText");
const { Square } = require("../lib/shapes");

describe("SVG", () => {
  it("Should create an SVG Element that is a blue square with text saying Dad that is white", () => {
    const shapeColour = "blue";
    const text = "DAD";
    const textColour = "white";

    const svgShape = new Square(shapeColour).render();
    const svgText = new SVGText(text, textColour).render();
    const expectResult = `<svg width="300" height="200">
    ${svgShape}
    ${svgText}
    </svg>`;

    expect(new SVG(svgShape, svgText).renderSVG()).toEqual(expectResult);
  });
});
