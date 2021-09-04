import React from "react";
import styled from "styled-components";
import Section from "./Section";

import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Home() {
  const cars = useSelector(selectCars);

  return (
    <Container>
      {cars.map((car) => (
        <Section key={car.id} car={car} />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
