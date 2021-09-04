import React, { useState } from "react";
import {
  CenterMenu,
  CloseIcon,
  CloseWrapper,
  Container,
  DropDownMenu,
  Img,
  Menu,
} from "./Header.style";
import { selectCarModels, selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [dropDown, setDropDown] = useState(false);
  const cars = useSelector(selectCars);
  const carModels = useSelector(selectCarModels);

  return (
    <Container>
      <a href="/">
        <Img src="/images/logo.svg" />
      </a>
      <CenterMenu>
        {cars.slice(0, cars.length - 1).map((car, i) => (
          <p key={car.id}>{car.title}</p>
        ))}
      </CenterMenu>
      <Menu>
        <p>SHOP</p>
        <p>TESLA ACCOUNT</p>
        <Img
          menu
          onClick={() => setDropDown(!dropDown)}
          src="/images/109-menu.svg"
        />
      </Menu>

      <DropDownMenu show={dropDown}>
        <CloseWrapper>
          <CloseIcon
            onClick={() => setDropDown(!dropDown)}
            src="/images/069-multiply.svg"
          />
        </CloseWrapper>
        {carModels.map((car, i) => (
          <li key={i}>
            <a href={`#${car.split(" ").join("")}`}>{car}</a>
          </li>
        ))}
        <li>
          <a href="/">CUSTOM ORDER 3</a>
        </li>
        <li>
          <a href="/">CUSTOM ORDER</a>
        </li>
        <li>
          <a href="/">Trade-In</a>
        </li>
      </DropDownMenu>
    </Container>
  );
}

export default Header;
