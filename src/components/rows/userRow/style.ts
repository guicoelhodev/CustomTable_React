import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 100px repeat(3, 1fr);

  span {
    text-align: center;
    padding: 0.4rem 0.4rem 0.2rem 0.4rem;
    border-right: 1px solid #333;
  }

  span:nth-last-child(1) {
    border-right-color: transparent;
  }
`;
