import React from "react";
import * as C from "./styles";
import coke from "./coke.jpeg";
// import { Container } from './styles';

const CardHover: React.FC = () => {
  return (
    <C.Container>
      <C.Card>
        <C.Content>
          <h2>Coke Cola</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            labore, ut perspiciatis eius delectus veniam rerum maxime
            voluptatibus.
          </p>
          <a href="">Buy Now</a>
        </C.Content>
        <C.Circle />
        <img src={coke} alt="coke" />
      </C.Card>
    </C.Container>
  );
};

export default CardHover;
