import * as React from "react";
import * as ReactDOM from "react-dom";
import ArrayElements from "../ArrayElements";
import { render, fireEvent } from "@testing-library/react";

jest.mock("../ArrayElements.module.css", () => ({
  bars: "bars",
  content: "content",
}));

function arraysAreEqual(array1: number[], array2: number[]): boolean {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

describe("Test ArrayElement component", () => {
  test("Should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ArrayElements />, div);
  });

  test("Should render a Make Array Button", () => {
    const { getByText } = render(<ArrayElements />);
    const button = getByText("Make Array");
    expect(button.nodeName).toEqual("BUTTON");
  });

  test("Should render a Sort Array button", () => {
    const { getByText } = render(<ArrayElements />);
    const button = getByText("Sort Array");
    expect(button.nodeName).toEqual("BUTTON");
  });

  test("Should render 100 ArrayElement components", () => {
    const { getAllByTestId } = render(<ArrayElements />);
    const components = getAllByTestId("array-element");
    expect(components).toHaveLength(100);
  });

  test("Should produce ArrayElement components of different heights when Make Array is clicked", () => {
    const { getAllByTestId, getByText } = render(<ArrayElements />);
    const components = getAllByTestId("array-element");

    const defaultHeights: number[] = [];
    components.forEach(({ style: { height } }) => {
      const elementHeight = +height.slice(0, -2);
      defaultHeights.push(elementHeight);
    });

    const button = getByText("Make Array");
    fireEvent.click(button);
    const newComponents = getAllByTestId("array-element");
    const newHeights: number[] = [];

    newComponents.forEach(({ style: { height } }) => {
      const elementHeight = +height.slice(0, -2);
      newHeights.push(elementHeight);
    });

    const areEqual = arraysAreEqual(defaultHeights, newHeights);
    expect(areEqual).toEqual(false);
  });
});
