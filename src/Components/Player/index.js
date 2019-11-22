import React, { useState, useEffect } from "react";
import Button from "../Button";

import { Container } from "./styles";

export default function Player(props) {
  const [points, setPoints] = useState(0);
  const [truco, setTruco] = useState(3);

  useEffect(() => {
    if (points >= 12) {
      window.alert(`${props.name} ganhou!`);
      window.location.reload(true);
    }
  }, [points, props.name]);

  const handlePoint = value => {
    setPoints(value + points);
  };

  const handleTruco = () => {
    setPoints(truco + points);
  };

  return (
    <>
      <Container default={props.default}>
        <h1>{props.name}</h1>
        <span>{points}</span>
      </Container>
      <Button text="1" onClick={() => handlePoint(1)} />
      <Button
        text="Truco"
        onClick={() => {
          handleTruco();
        }}
      />
    </>
  );
}
