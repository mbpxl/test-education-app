import React from "react";
import { DataArrayType, data } from "../../data/data";
import { List, ListItem } from "../Styled/StyledList";

export const QuestionList = React.memo(
  (props: {
    index: number;
    handleAnswerClick: (answerIndex: number) => void;
    selectedAnswer: number | null;
    isCorrect: boolean | null;
  }) => {
    let currentItem = data[props.index];

    return (
      <List>
        {Object.keys(currentItem)
          .filter((key) => key.startsWith("option"))
          .map((key, id) => {
            const isSelected = props.selectedAnswer === id + 1;
            const correct = isSelected ? props.isCorrect : null;

            return (
              <ListItem
                key={id}
                onClick={() => props.handleAnswerClick(id + 1)}
                correct={correct}
              >
                {currentItem[key as keyof DataArrayType]}
              </ListItem>
            );
          })}
      </List>
    );
  }
);
