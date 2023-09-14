import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

//smoke test to make sure it renders in the first place from smoke test example
it("renders without crashing", function() {
  render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
});

// snapshot test from snapshot example
it("matches snapshot", function() {
  const {asFragment} = render(<Carousel 
    photos={TEST_IMAGES}
    title="images for testing"
  />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // attempt to move back in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second, again
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  //move foreward then back in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second, again
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});


it("buttons hide when not needed", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect right arrow to show, but not the left
  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).toBeVisible();
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).not.toBeVisible();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect both arrows to show
  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).toBeVisible();
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).toBeVisible();

  // move forward in the carousel again
  fireEvent.click(rightArrow);

  // expect the left arrow to show, but not the right
  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).not.toBeVisible();
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).toBeVisible();
});
