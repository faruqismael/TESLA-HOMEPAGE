import React from "react";
import {
  Button,
  Buttons,
  ButtonGroup,
  DownArrow,
  ItemText,
  Wrap,
} from "./Section.style";
import Fade from "react-reveal/Fade";

function Section({ car }) {
  return (
    <Wrap
      className={`car${car.id}`}
      id={car.title.split(" ").join("")}
      bgImg={car.image}
    >
      <Fade bottom>
        <ItemText>
          <h1>{car.title}</h1>
          <p>{car.description}</p>
        </ItemText>
      </Fade>

      <ButtonGroup>
        <Fade bottom>
          <Buttons>
            <Button bg="rgba(23,26,32,0.8)">{car.leftBtnTxt}</Button>
            {car.rightBtnTxt && (
              <Button bg="white" color="black">
                {car.rightBtnTxt}
              </Button>
            )}
          </Buttons>
        </Fade>

        <DownArrow src="/images/down-arrow.svg" />
      </ButtonGroup>
    </Wrap>
  );
}

export default Section;
