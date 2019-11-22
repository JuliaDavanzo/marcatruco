import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => (props.default ? "#e55039" : "#079992")};
  width: 400px;
  float: left;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  span {
    font-size: 100px;
  }
`;
