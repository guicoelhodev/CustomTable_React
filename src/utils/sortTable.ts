import { IColumn } from "../types";

export const sortObjectArray = (
  prev: any,
  next: any,
  dataTable: IColumn[],
  currentKey: any
) => {
  let filteredDecrescent = dataTable
    .map((column) => {
      if (column.mode === "decrescent") return column;
      return null;
    })
    .filter((item) => item)[0];

  let key: keyof typeof prev = filteredDecrescent
    ? filteredDecrescent.keyName
    : currentKey;

  console.log("that the key", currentKey);

  if (filteredDecrescent)
    return prev[key] > next[key] ? -1 : prev[key] < next[key] ? 1 : 0;

  return prev[key] < next[key] ? -1 : prev[key] > next[key] ? 1 : 0;
};
