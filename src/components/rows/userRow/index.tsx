import React from "react";
import * as S from "./style";

interface IUserRow {
  name: string;
  age: string;
  email: string;
  city: string;
  phone: string;
}
export const UserRow: React.FC<IUserRow> = (userInfo) => {
  return (
    <S.Container>
      {Object.values(userInfo).map((itemUser) => (
        <span>{itemUser}</span>
      ))}
    </S.Container>
  );
};
