import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Link to="/bell">Bell</Link>
      <Link to="/card">Card</Link>
    </Container>
  );
};

export default Home;
