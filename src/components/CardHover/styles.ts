import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap");

  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  position: relative;
  width: 600px;
  height: 350px;
  background: #000;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.5s ease;
  overflow: hidden;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 300px;
    pointer-events: none;
    transition: 0.5s ease;
  }
  &:hover {
    img {
      position: fixed;
      left: 60%;
      height: 500px;
      z-index: 2;

      @media (max-width: 1200px) {
        left: 82%;
      }
    }
  }

  &:hover {
    label {
      transition: 0.5s ease;
      opacity: 1;
      z-index: 1;

      width: 50%;
    }
    div {
      &:before {
        background: #d83133;
        clip-path: circle(400px at center);
      }
    }
  }
  div:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    clip-path: circle(120px at center);
    transition: 0.5s ease;
  }
`;
export const Content = styled.label`
  opacity: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  padding: 2rem 2rem;
  color: #fff;
  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 2rem;
  }
  p {
    font-size: 1.3rem;
    text-align: left;
  }

  a {
    margin-bottom: 2rem;
    text-decoration: none;
    font-size: 1.5rem;
    color: #444;
    background: #fff;
    padding: 10px 20px;
    border-radius: 0.5rem;
    font-weight: 700;
  }
`;
export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
`;
