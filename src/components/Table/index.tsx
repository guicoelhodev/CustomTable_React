import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { IColumn } from "../../types";
import * as S from "./style";

interface ITableUser {
  minWidth?: string;
  children: ReactNode;
  columnsStyle: string;
  columnsValues: IColumn[];
  setColumns?: Dispatch<SetStateAction<IColumn[]>>;
  setCurrentKey?: Dispatch<SetStateAction<string>>;
}
export const Table: React.FC<ITableUser> = ({
  minWidth,
  columnsStyle,
  columnsValues,
  setColumns,
  setCurrentKey,
  children,
}) => {
  const handleCurrentFilter = (
    value: string,
    mode: "crescent" | "decrescent"
  ) => {
    let tmpMode: "crescent" | "decrescent";

    if (mode === "crescent") {
      tmpMode = "decrescent";
    } else {
      tmpMode = "crescent";
    }

    let tmpColumnsValues = Object.values(columnsValues).map((column) => {
      if (column.keyName === value) return { ...column, mode: tmpMode };
      return { ...column, mode: "crescent" as any };
    });

    if (setColumns && setCurrentKey) {
      setColumns(tmpColumnsValues);
      setCurrentKey(value);
    }
  };
  return (
    <S.Container gridColumns={columnsStyle} minWidth={minWidth}>
      <S.Article gridColumns={columnsStyle}>
        {columnsValues.map((column) => (
          <S.ButtonColumn
            onClick={() => handleCurrentFilter(column.keyName, column.mode)}
          >
            <span>{column.name}</span>
            {column.mode === "crescent" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </S.ButtonColumn>
        ))}
      </S.Article>

      <section>{children}</section>
    </S.Container>
  );
};
