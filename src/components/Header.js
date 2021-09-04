import React, { useState } from "react";
import styled from "styled-components";
import {
  CenterMenu,
  CloseIcon,
  CloseWrapper,
  Container,
  DropDownItem,
  DropDownItems,
  DropDownMenu,
  Img,
  Menu,
} from "./Header.style";

function Header() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <Container>
      <a href="/">
        <Img src="/images/logo.svg" />
      </a>
      <CenterMenu>
        <h3>MODEL S</h3>
        <h3>MODEL 3</h3>
        <h3>MODEL X</h3>
        <h3>MODEL Y</h3>
      </CenterMenu>
      <Menu>
        <h3>SHOP</h3>
        <h3>TESLA ACCOUNT</h3>
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
        <li>
          <a href="#">MODEL S</a>
        </li>
        <li>
          <a href="#">MODEL 3</a>
        </li>
        <li>
          <a href="#">MODEL X</a>
        </li>
        <li>
          <a href="#">MODEL Y</a>
        </li>
        <li>
          <a href="#">CUSTOM ORDER 3</a>
        </li>
        <li>
          <a href="#">CUSTOM ORDER</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
      </DropDownMenu>
    </Container>
  );
}

export default Header;
