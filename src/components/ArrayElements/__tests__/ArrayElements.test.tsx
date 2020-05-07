import * as React from "react";
import * as ReactDOM from "react-dom";
import ArrayElements from "../ArrayElements";
import { render } from "@testing-library/react";

jest.mock("../ArrayElements.module.css", () => ({
  bars: "bars",
  content: "content",
}));

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

  test("");
});
