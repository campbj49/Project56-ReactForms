import { render, fireEvent } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";
import TEST_IMAGES from "./_testCommon.js";

//smoke test to make sure it renders in the first place from smoke test example
it("renders without crashing", function() {
  render(<NewToDoForm/>);
});

// snapshot test from snapshot example
it("matches snapshot", function() {
  const {asFragment} = render(<NewToDoForm/>);
  expect(asFragment()).toMatchSnapshot();
});