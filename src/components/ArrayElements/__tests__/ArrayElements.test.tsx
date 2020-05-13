import * as React from "react";
import * as ReactDOM from "react-dom";
import ArrayElements from "../ArrayElements";
import { render, fireEvent, wait } from "@testing-library/react";

jest.mock("../../ArrayElement/ArrayElement.module.css", () => ({
  container: "container",
}));

jest.mock("../ArrayElements.module.css", () => ({
  bars: "bars",
  content: "content",
}));

const arrayElement = (
  <ArrayElements
    defaultDelay={0}
    defaultDivCount={100}
    defaultDivLength={1000}
  />
);

function arraysAreEqual(array1: number[], array2: number[]): boolean {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

describe("Components should render", () => {
  test("Should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(arrayElement, div);
  });

  test("Should render a Make Array Button", () => {
    const { getByText } = render(arrayElement);
    const button = getByText("Make Array");
    expect(button.nodeName).toEqual("BUTTON");
  });

  test("Should render a MergeSort Array button", () => {
    const { getByText } = render(arrayElement);
    const button = getByText("MergeSort");
    expect(button.nodeName).toEqual("BUTTON");
  });

  test("Should render a QuickSort Array button", () => {
    const { getByText } = render(arrayElement);
    const button = getByText("QuickSort");
    expect(button.nodeName).toEqual("BUTTON");
  });

  test("Should render a BubbleSort Array button", () => {
    const { getByText } = render(arrayElement);
    const button = getByText("BubbleSort");
    expect(button.nodeName).toEqual("BUTTON");
  });

  test("should render a SelectionSort Array button", () => {
    const { getByText } = render(arrayElement);
    const button = getByText("SelectionSort");
    expect(button.nodeName).toEqual("BUTTON");
  });

  test("should render a InsertionSort Array button", () => {
    const { getByText } = render(arrayElement);
    const button = getByText("InsertionSort");
    expect(button.nodeName).toEqual("BUTTON");
  });

  test("Should render a slider to control sorting speed", () => {
    const { getByLabelText } = render(arrayElement);
    const slider = getByLabelText("Sorting Speed");
    expect(slider).toBeTruthy();
  });

  // test("Slider should have a range from 0.001 to 100", () => {
  //   const { getByLabelText } = render(arrayElement);
  //   const slider = getByLabelText("Sorting Speed");

  //   expect(slider).toHaveAttribute("min", "0.001");
  //   expect(slider).toHaveAttribute("max", "100");
  // });

  test("Should render 100 ArrayElement components", () => {
    const { getAllByTestId } = render(arrayElement);
    const components = getAllByTestId("array-element");
    expect(components).toHaveLength(100);
  });

  test("Should produce ArrayElement components of different heights when Make Array is clicked", () => {
    const { getAllByTestId, getByText } = render(arrayElement);
    const components = getAllByTestId("array-element");

    const defaultHeights: number[] = [];
    components.forEach(({ style: { width } }) => {
      const elementHeight = +width.slice(0, -2);
      defaultHeights.push(elementHeight);
    });

    const button = getByText("Make Array");
    fireEvent.click(button);
    const newComponents = getAllByTestId("array-element");
    const newHeights: number[] = [];

    newComponents.forEach(({ style: { width } }) => {
      const elementHeight = +width.slice(0, -2);
      newHeights.push(elementHeight);
    });

    const areEqual = arraysAreEqual(defaultHeights, newHeights);
    expect(areEqual).toEqual(false);
  });
});

describe("Test sorting buttons", () => {
  async function testSort(button: string) {
    const { getAllByTestId, getByText } = render(arrayElement);
    const sortingButton = getByText(`${button}`);

    fireEvent.click(sortingButton);

    await wait(() => {
      const makeArrayButton: any = getByText("Make Array");
      return !makeArrayButton.disabled;
    });
    const components = getAllByTestId("array-element");
    const heights: number[] = [];

    components.forEach(({ style: { height } }) => {
      const elementHeight = +height.slice(0, -2);
      heights.push(elementHeight);
    });

    const heightsCopy = heights.slice();
    heightsCopy.sort((a, b) => a - b);
    const areEqual = arraysAreEqual(heightsCopy, heights);
    expect(areEqual).toEqual(true);
  }

  test("MergeSort button should sort divs when clicked", async () => {
    await testSort("MergeSort");
  });

  test("QuickSort button should sort divs when clicked", async () => {
    await testSort("QuickSort");
  });

  test("BubbleSort button should sort divs when clicked", async () => {
    await testSort("BubbleSort");
  });

  test("SelectionSort button should sort divs when clicked", async () => {
    await testSort("SelectionSort");
  });

  test("InsertionSort button should sort divs when clicked", async () => {
    await testSort("InsertionSort");
  });
});
