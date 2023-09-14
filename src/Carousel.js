import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const [leftHide, setLeftHide] = useState({visibility:"hidden"});
  const [rightHide, setRightHide] = useState({});

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1 and hides it 
  function goForward() {
    setLeftHide({})
    if(currCardIdx < total-1)
      setCurrCardIdx(currCardIdx + 1);
    if(currCardIdx >=total-2)
      setRightHide({visibility:"hidden"});
  }

  //Decrements currCardIdx state by 1 as long as it's greater than 1
  function goBackward() {
    setRightHide({});
    if(currCardIdx >0)
      setCurrCardIdx(currCardIdx - 1);
    if(currCardIdx <=1)
      setLeftHide({visibility:"hidden"})
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="bi bi-arrow-left-circle"
          style = {leftHide}
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          style={rightHide}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
