import React from "react";
import styled from "styled-components";
import {
  Button,
  Buttons,
  ButtonGroup,
  DownArrow,
  ItemText,
  Wrap,
} from "./Section.style";

function Section({ car }) {
  return (
    <Wrap bgImg={car.image}>
      <ItemText>
        <h1>{car.title}</h1>
        <p>{car.description}</p>
      </ItemText>

      <ButtonGroup>
        <Buttons>
          <Button bg="rgba(23,26,32,0.8)">{car.leftBtnTxt}</Button>
          {car.rightBtnTxt && (
            <Button bg="white" color="black">
              {car.rightBtnTxt}
            </Button>
          )}
        </Buttons>
        <DownArrow src="/images/down-arrow.svg" />
      </ButtonGroup>
    </Wrap>
  );
}

export default Section;
