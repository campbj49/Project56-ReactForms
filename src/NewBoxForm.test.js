import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
import TEST_IMAGES from "./_testCommon.js";

//smoke test to make sure it renders in the first place from smoke test example
it("renders without crashing", function() {
  render(<NewBoxForm/>);
});

// snapshot test from snapshot example
it("matches snapshot", function() {
  const {asFragment} = render(<NewBoxForm/>);
  expect(asFragment()).toMatchSnapshot();
});