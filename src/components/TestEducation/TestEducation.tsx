import styled from "styled-components";
import { Title } from "../Styled/StyledText";
import { QuestionList } from "../QuestionsList/QuestionsList";
import { Button } from "../Styled/StyledButton";
import { ProgressBar } from "../Styled/StyledProgressBar";
import React from "react";
import { DataArrayType, data } from "../../data/data";

const StyledTestEducation = styled.div`
  width: 640px;
  margin: auto;
  margin-top: 100px;
  background-color: #fff;
  color: #262626;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  padding: 40px 50px;
`;

export const TestEducation = () => {
  //useState для прохода по массиву data [data/data.tsx]
  const [index, setIndex] = React.useState<number>(0);
  //useState для прохода по объекту (элемента массива data) массива
  const [question, setQuestion] = React.useState<DataArrayType>(data[index]);

  //useState для отслеживание выбранного ответа
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(
    null
  );

  //useState для проверки правильности ответа. От значение зависит каким будет цвет выбранного овтета. Смотри в props для <QuestionList />
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);

  //useState для блокирвоки выбора ответа, после первого ответа
  const [lock, setLock] = React.useState<boolean>(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (!lock) {
      setSelectedAnswer(answerIndex);
      setIsCorrect(answerIndex === question.ans);
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (index < data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(data[index + 1]);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setLock(false);
    } else {
      console.log("Тест завершен");
    }
  };

  return (
    <StyledTestEducation>
      <Title size={"18px"} weight={"400"} header>
        Test Education App
      </Title>
      <Title size={"27px"} weight={"500"}>
        {index + 1}. {question.question}
      </Title>
      <QuestionList
        index={index}
        handleAnswerClick={handleAnswerClick}
        selectedAnswer={selectedAnswer}
        isCorrect={isCorrect}
      />
      <Button onClick={nextQuestion}>next</Button>
      <ProgressBar>
        {index + 1} of {data.length}
      </ProgressBar>
    </StyledTestEducation>
  );
};
