import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${({ bgImg }) => "./images/" + bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.div`
  margin-top: 15vh;
`;

export const Buttons = styled.div`
  display: "flex";
  margin-bottom: 1vh;
  @media (max-width: 734) {
    display: grid;
  }
`;

export const ButtonGroup = styled.div`
  margin-bottom: 1vh;
`;

export const Button = styled.button`
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color || "white"};
  padding: 10px 30px;
  height: 5vh;
  width: 30vh;
  border-radius: 100px;
  margin: 5px 20px;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  opacity: 0.85;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 700px) {
    padding-top: 20px !important;
    padding-bottom: 30px;
  }
`;

export const DownArrow = styled.img`
  height: 40px;
  width: 100%;
  overflow-x: hidden;
  animation: bounce infinite 1.5s;
`;
