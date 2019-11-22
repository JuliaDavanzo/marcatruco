import React from "react";
import Player from "../../Components/Player";

import { Container, Separator, Left, Right, Reset } from "./styles";

export default function MainPage() {
  const onReset = () => {
    window.location.reload(true);
  };
  return (
    <>
      <Container>
        <Left>
          <Player name="Nós" default />
        </Left>
        <Separator />
        <Right>
          <Player name="Eles" />
        </Right>
      </Container>
      <Reset onClick={() => onReset()}>Reiniciar</Reset>
    </>
  );
}
