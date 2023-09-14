import { render, fireEvent } from "@testing-library/react";
import ToDo from "./ToDo";

//smoke test to make sure it renders in the first place from smoke test example
it("renders without crashing", function() {
  render(<ToDo text="test"/>);
});

// snapshot test from snapshot example
it("matches snapshot", function() {
  const {asFragment} = render(<ToDo text="test"/>);
  expect(asFragment()).toMatchSnapshot();
});