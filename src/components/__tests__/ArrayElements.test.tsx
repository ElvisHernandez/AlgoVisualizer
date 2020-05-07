import * as React from "react";
import * as ReactDOM from "react-dom";
import ArrayElements from "../ArrayElements/ArrayElements";
import styles from "../ArrayElements/ArrayElements.module.css";

jest.mock("../ArrayElements/ArrayElements.module.css", () => ({
  styles: {
    bar: "bar",
    content: "content",
  },
}));

describe("Test ArrayElement component", () => {
  test("Should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ArrayElements />, div);
  });
});
