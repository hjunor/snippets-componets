import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const DisplayCenter = ({ children }: any) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <Container>
      <Button onClick={handleClick}>
        <BiArrowBack size={32} />
      </Button>
      {children}
    </Container>
  );
};

export { DisplayCenter };
