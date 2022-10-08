import React, { Dispatch, SetStateAction, useId } from "react";
import * as S from "./style";

interface ITabs {
  listTabs: { label: string; value: string }[];
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}
export const Tabs: React.FC<ITabs> = ({
  currentTab,
  setCurrentTab,
  listTabs,
}) => {
  const tabIsActive = (currentTab: string, tabValue: string) =>
    currentTab === tabValue;

  const handleTab = (tabValue: string) => {
    setCurrentTab(tabValue);
  };

  return (
    <S.Container>
      {listTabs.map((tab) => (
        <S.Tab
          key={useId()}
          onClick={() => handleTab(tab.value)}
          active={tabIsActive(currentTab, tab.value)}
        >
          {tab.label}
        </S.Tab>
      ))}
    </S.Container>
  );
};
