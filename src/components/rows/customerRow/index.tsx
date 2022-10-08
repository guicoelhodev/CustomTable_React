import React from "react";
import { HiFlag } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import * as S from "./style";

interface IPropsCustomer {
  name: string;
  avatar: string;
  country: string;
  cpf: string;
  profession: string;
  university: string;
  birthDate: string;
  status: "Working" | "Studying";
  github: "string";
}

export const CustomerRow: React.FC<IPropsCustomer> = (customer) => {
  return (
    <S.Container>
      <S.UserContainer>
        <img
          src={customer.avatar}
          alt="just a simple avatar image"
          loading="lazy"
        />
        <p>{customer.name}</p>
      </S.UserContainer>

      <div>
        <p>{customer.country}</p>
        <HiFlag />
      </div>

      <div>
        <p>{customer.cpf}</p>
      </div>

      <div>
        <p>{customer.profession}</p>
      </div>

      <div>
        <p>{customer.university}</p>
      </div>

      <div>
        <BsFillCalendarWeekFill />
        <p>{customer.birthDate}</p>
      </div>
      <div>
        <S.Status status={customer.status}>{customer.status}</S.Status>
      </div>

      <div>
        <S.Github href={customer.github} target="_blank">
          <AiFillGithub />
          <p>acessar meu github</p>
        </S.Github>
      </div>
    </S.Container>
  );
};
