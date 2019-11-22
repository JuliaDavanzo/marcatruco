import styled from "styled-components";

export const Container = styled.button`
  border: none;
  margin: ${props => (props.margin ? props.margin : "0px")};
  background-color: #ecf0f1;
  color: black;
  width: calc((100% / 2));
  height: 30px;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }

  :focus {
    outline: none;
  }
`;
