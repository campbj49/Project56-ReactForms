import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

//smoke test to make sure it renders in the first place from smoke test example
it("renders without crashing", function() {
  render(<Card caption="test" 
        src={TEST_IMAGES[0]} 
        currNum="2" 
        totalNum="2"/>);
});

// snapshot test from snapshot example
it("matches snapshot", function() {
  const {asFragment} = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});