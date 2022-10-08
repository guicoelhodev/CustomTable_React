import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    margin: 20px auto;
    max-width: 600px;
    border-radius: 8px;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const UserContainer = styled.div`
  background-color: #fff;
  max-width: 1280px;
  width: 100%;
  overflow-x: scroll;
  border: 1px solid #333;
`;

export const CustomersContainer = styled.div`
  background-color: #fff;
  max-width: 1280px;
  width: 100%;
  border: 1px solid #333;
  overflow-x: scroll;
`;
