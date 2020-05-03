import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import ArrayElement, {
  ArrayElementProps,
} from "../components/ArrayElement/ArrayElement";

describe("<ArrayElement />", () => {
  test("Should return a div with a height between 5 to 1096", async () => {});
});

function renderArrayElement(props: Partial<ArrayElementProps> = {}) {
  const defaultProps: ArrayElementProps = {
    background: "#00e5ff",
    width: "5px",
    height: "500px",
    marginRight: "2px",
  };
  return render(<ArrayElement {...defaultProps} {...props} />);
}
