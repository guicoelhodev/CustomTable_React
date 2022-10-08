import styled from "styled-components";

interface IStyledTab {
  active: boolean;
}
export const Container = styled.div`
  width: 100%;
  background-color: #16a9e5;
  padding: 0.2rem 0.4rem;

  display: flex;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem;

  border-radius: 0.8rem;
`;

export const Tab = styled.button<IStyledTab>`
  background-color: ${({ active }) => (active ? "#f8f8f8" : "#16a9e5")};
  color: ${({ active }) => (active ? "#16a9e5" : "#f8f8f8")};
  padding: 0.4rem 0.8rem;

  text-align: center;
  font-weight: 700;
  border: 1px solid;
  border-color: ${({ active }) => (active ? "#f8f8f8" : "#16a9e5")};
  border-radius: 8px;

  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
`;
