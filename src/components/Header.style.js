import styled from "styled-components";

export const Container = styled.header`
  min-height: 60px;
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const Img = styled.img`
  height: 30px;
  display: ${({ menu }) => menu && "none"};

  @media (max-width: 900px) {
    height: 3vh;
    display: ${({ menu }) => menu && "block"};
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3 {
    margin: 0 10px;
    text-transform: uppercase;
  }
  & * {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;

export const CenterMenu = styled(Menu)`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const DropDownMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 20px;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: 0.3s all ease-in-out;

  li {
    cursor: pointer;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled.img`
  width: 20px;
  cursor: pointer;
`;
