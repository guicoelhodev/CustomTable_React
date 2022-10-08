import styled from "styled-components";

interface IStyledTable {
  minWidth?: string;
  gridColumns: string;
}

export const Container = styled.div<IStyledTable>`
  margin: 0 auto;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "none")};
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Article = styled.article<IStyledTable>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ gridColumns }) => gridColumns};

  button:nth-last-child(1) {
    border-right: 1px solid transparent;
  }
`;

export const ButtonColumn = styled.button`
  width: 100%;
  background-color: #fff;

  border-radius: 0;
  border: 1px solid #fff;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
  //border-top: 1px solid #333;

  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  span {
    font-size: 1rem;
    font-weight: 500;
    color: #16a9e5;
    margin-right: 0.5rem;
  }
  svg {
    width: 20px;
    height: 20px;
    fill: #16a9e5;
  }

  transition: background 0.3s ease-in;
  :active {
    background-color: #eee;
  }
`;
