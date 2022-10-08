import React, { useState } from "react";
import { CustomerRow } from "../components/rows/customerRow";
import { UserRow } from "../components/rows/userRow";
import { TableUser } from "../components/TableUser";
import { Tabs } from "../components/Tabs";
import { usersData } from "../data/example1/usersData";
import { usersTable } from "../data/example1/usersTable";
import { customersData } from "../data/example2/customersData";
import { customersTable } from "../data/example2/customerTable";
import "../index.css";
import { sortObjectArray } from "../utils/sortTable";

import * as S from "./style";

const tabs = [
  { label: "Primeiro exemplo", value: "example1" },
  { label: "Segundo exemplo", value: "example2" },
];

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].value);

  const [customersColumns, setCustomersColumns] = useState(customersTable);
  const [currentKey, setCurrentKey] = useState("name");

  return (
    <S.Container>
      <header>
        <Tabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          listTabs={tabs}
        />
      </header>

      <S.Main>
        {currentTab === "example1" && (
          <S.UserContainer>
            <TableUser
              minWidth="900px"
              columnsValues={usersTable}
              columnsStyle="1fr 100px repeat(3, 1fr)"
            >
              {usersData.map((user) => (
                <UserRow {...(user as any)} />
              ))}
            </TableUser>
          </S.UserContainer>
        )}
        {currentTab === "example2" && (
          <S.CustomersContainer>
            <TableUser
              minWidth="900px"
              columnsValues={customersColumns}
              setColumns={setCustomersColumns}
              setCurrentKey={setCurrentKey}
              columnsStyle="280px repeat(4, 180px) 240px 100px 280px"
            >
              {customersData
                .sort((prev, next) => {
                  return sortObjectArray(
                    prev,
                    next,
                    customersColumns,
                    currentKey
                  );
                })
                .map((user) => (
                  <CustomerRow {...(user as any)} />
                ))}
            </TableUser>
          </S.CustomersContainer>
        )}
      </S.Main>
    </S.Container>
  );
};
