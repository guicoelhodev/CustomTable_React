import styled from "styled-components";

interface IStyledStatus {
  status: "Studying" | "Working";
}
export const Container = styled.div`
  display: grid;

  grid-template-columns: 280px repeat(4, 180px) 240px 100px 280px;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    p {
      text-align: center;
    }
  }
`;

export const UserContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;

  gap: 1rem;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  p {
    flex: 1;
    text-align: left !important;
    font-weight: 600;
    color: #777;
  }
`;

export const Status = styled.span<IStyledStatus>`
  background-color: ${({ status }) =>
    status === "Working" ? "#79e73e" : "#f96161"};
  color: ${({ status }) => (status === "Working" ? "#099307" : "#b91515")};

  padding: 0.4rem;
  border-radius: 8px;
`;

export const Github = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;

  svg {
    width: 30px;
    height: 30px;
    fill: #333;
  }
`;
