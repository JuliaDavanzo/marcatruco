import React from "react";

import { Container } from "./styles";

export default function Button(props) {
  return (
    <>
      <Container margin={props.margin} onClick={props.onClick}>
        {props.text}
      </Container>
    </>
  );
}
