import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 400px;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Separator = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 130px;
  height: 40px;
  text-align: center;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 10px;

  ::after {
    content: "X";
  }
`;

export const Left = styled.div`
  float: left;
  width: 400px;
  height: 300px;
`;

export const Right = styled.div`
  float: right;
  width: 400px;
  height: 300px;
`;

export const Reset = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #c0392b;
  width: 100px;
  height: 40px;
  padding: 10px;
  margin: 10px;
  border: none;
  color: white;

  :hover {
    filter: brightness(1.1);
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;
