import styled from "styled-components";
import { Title } from "../Styled/StyledText";
import { QuestionList } from "../QuestionsList/QuestionsList";
import { Button } from "../Styled/StyledButton";
import { ProgressBar } from "../Styled/StyledProgressBar";
import React, { useEffect } from "react";
import { DataArrayType, data } from "../../data/data";
import { AddQuestion } from "../AddQuestion/AddQuestion";
import { Result } from "../Result/Result";
import { Timer } from "../Timer/Timer";

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
  //useState для смены режимов теста и добавления нового вопроса
  const [isEditQuestion, setEditQuestion] = React.useState<boolean>(true);

  //useState для прохода по массиву data [data/data.tsx]
  const [index, setIndex] = React.useState<number>(() => {
    const savedIndex = localStorage.getItem("currentQuestionIndex");
    return savedIndex !== null ? parseInt(savedIndex) : 0;
  });

  //useState для прохода по объекту (элемента массива data) массива
  const [question, setQuestion] = React.useState<DataArrayType>(data[index]);

  //useState для отслеживание выбранного ответа
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(
    () => {
      const savedAnswer = localStorage.getItem(`selectedAnswer${index}`);
      return savedAnswer !== null ? parseInt(savedAnswer) : null;
    }
  );

  //useState для проверки правильности ответа. От значение зависит каким будет цвет выбранного овтета. Смотри в props для <QuestionList />
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);

  //useState для блокирвоки выбора ответа, после первого ответа
  const [lock, setLock] = React.useState<boolean>(false);

  //useState для ознакомления с результатом, если на все вопросы пройдены
  const [result, setResult] = React.useState<boolean>(false);

  //useState для отслеживания количества правильных ответов
  const [score, setScore] = React.useState<number>(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore !== null ? parseInt(savedScore) : 0;
  });

  useEffect(() => {
    // Сохраняем индекс текущего вопроса
    localStorage.setItem("currentQuestionIndex", index.toString());
    // Сохраняем выбранный ответ
    if (selectedAnswer !== null) {
      localStorage.setItem(`selectedAnswer${index}`, selectedAnswer.toString());
    }
  }, [index, selectedAnswer]);

  useEffect(() => {
    // При загрузке проверяем и устанавливаем вопрос
    setQuestion(data[index]);
    const savedAnswer = localStorage.getItem(`selectedAnswer${index}`);
    if (savedAnswer !== null) {
      setSelectedAnswer(parseInt(savedAnswer));
    }
  }, [index]);

  useEffect(() => {
    // Сохраняем значение score в localStorage
    localStorage.setItem("score", score.toString());
  }, [score]);

  const handleAnswerClick = (answerIndex: number): void => {
    if (!lock) {
      setSelectedAnswer(answerIndex);
      setIsCorrect(answerIndex === question.ans);
      setLock(true);
      if (answerIndex === question.ans) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleChangeEditMode = (): void => {
    setEditQuestion(!isEditQuestion);
  };

  const nextQuestion = (): void => {
    if (index < data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(data[index + 1]);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setLock(false);
    } else {
      console.log("Тест завершен");
      setResult(true);
    }
  };

  const reset = (): void => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setSelectedAnswer(null);
    localStorage.clear();
  };

  const handleTimeUp = (): void => {
    setResult(true);
  };

  return (
    <div className="">
      {isEditQuestion ? (
        result ? (
          <StyledTestEducation>
            <Title flex size={"18px"} weight={"400"} header>
              Test Education App
            </Title>
            <Result scrore={score} reset={reset} />
          </StyledTestEducation>
        ) : (
          <StyledTestEducation>
            <Title flex size={"18px"} weight={"400"} header>
              Test Education App
              <Button
                onClick={handleChangeEditMode}
                width={"100px"}
                height={"40px"}
                fontSize={"18px"}
                margin={"0"}
              >
                Edit
              </Button>
            </Title>
            <Timer duration={300} onTimeUp={handleTimeUp} />
            <Title size={"27px"} weight={"500"}>
              {index + 1}. {question.question}
            </Title>
            <QuestionList
              index={index}
              handleAnswerClick={handleAnswerClick}
              selectedAnswer={selectedAnswer}
              isCorrect={isCorrect}
            />
            <Button onClick={nextQuestion}>Next</Button>
            <ProgressBar>
              {index + 1} of {data.length}
            </ProgressBar>
          </StyledTestEducation>
        )
      ) : (
        <StyledTestEducation>
          <AddQuestion
            isEditQuestion={isEditQuestion}
            setEditQuestion={setEditQuestion}
          />
        </StyledTestEducation>
      )}
    </div>
  );
};
