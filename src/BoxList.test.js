import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";
import TEST_IMAGES from "./_testCommon.js";

//smoke test to make sure it renders in the first place from smoke test example
it("renders without crashing", function() {
  render(<BoxList/>);
});

// snapshot test from snapshot example
it("matches snapshot", function() {
  const {asFragment} = render(<BoxList/>);
  expect(asFragment()).toMatchSnapshot();
});

it("adding a box works", function() {
  const { container } = render(<BoxList/>);

  // expect there to be no boxes rendered yet
  expect(
    container.querySelector(".Box")
  ).not.toBeInTheDocument();

  //fill out the form and submit it
  container.querySelectorAll("input")[0].value = 500;
  container.querySelectorAll("input")[1].value = 250;
  container.querySelectorAll("input")[2].value = "blue";
  const subButton = container.querySelector("button");
  fireEvent.click(subButton);

  // expect a box to have appeared
  expect(
    container.querySelector(".Box")
  ).toBeInTheDocument();

  //click X

  const delButton = container.querySelector("p");
  fireEvent.click(delButton);

  // expect there to be no boxes rendered 
  expect(
    container.querySelector(".Box")
  ).not.toBeInTheDocument();
});

