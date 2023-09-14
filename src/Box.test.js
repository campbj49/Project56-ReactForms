import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";
import TEST_IMAGES from "./_testCommon.js";

//smoke test to make sure it renders in the first place from smoke test example
it("renders without crashing", function() {
  render(<Box height={200} 
        width={200} 
        backgroundColor="red"/>);
});

// snapshot test from snapshot example
it("matches snapshot", function() {
  const {asFragment} = render(<Box height={200} 
    width={200} 
    backgroundColor="red"/>);
  expect(asFragment()).toMatchSnapshot();
});