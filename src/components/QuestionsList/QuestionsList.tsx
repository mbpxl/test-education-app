import React from "react";
import { DataArrayType, data } from "../../data/data";
import { List } from "../Styled/StyledList";

export const QuestionList = (props: any) => {
  let currentItem = data[props.index];
  console.log(currentItem);

  return (
    <List>
      {Object.keys(currentItem)
        .filter((key) => key.startsWith("option"))
        .map((key) => (
          <li>{currentItem[key as keyof DataArrayType]}</li>
        ))}
    </List>
  );
};
