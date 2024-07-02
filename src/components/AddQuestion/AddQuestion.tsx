import { ErrorMessage, Field, Form, Formik } from "formik";
import { DataArrayType, data } from "../../data/data";
import { Button } from "../Styled/StyledButton";
import "./AddQuestion.css";
import React from "react";

export const AddQuestion = React.memo((props: any) => {
  const submit = (
    values: DataArrayType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 200);
    let newQuestion: any = {
      question: values.question,
      option1: values.option1,
      option2: values.option2,
      option3: values.option3,
      option4: values.option4,
      ans: values.ans,
    };

    if (
      newQuestion.question &&
      newQuestion.option1 &&
      newQuestion.option2 &&
      newQuestion.option3 &&
      newQuestion.option4 &&
      newQuestion.ans
    ) {
      data.push(newQuestion);
      props.setEditQuestion(!props.isEditQuestion);
    } else {
      alert("Заполните все поля");
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          question: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          ans: "",
        }}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form className="container">
            <Field
              type="text"
              name="question"
              placeholder={"Введите название вопроса"}
              className="input"
            />
            <ErrorMessage name="question" component="div" />
            <Field
              type="text"
              name="option1"
              placeholder={"Вариант ответа №1"}
              className="input"
            />
            <ErrorMessage name="option1" component="div" />
            <Field
              type="text"
              name="option2"
              placeholder={"Вариант ответа №2"}
              className="input"
            />
            <ErrorMessage name="option2" component="div" />
            <Field
              type="text"
              name="option3"
              placeholder={"Вариант ответа №3"}
              className="input"
            />
            <ErrorMessage name="option3" component="div" />
            <Field
              type="text"
              name="option4"
              placeholder={"Вариант ответа №4"}
              className="input"
            />
            <ErrorMessage name="option4" component="div" />
            <Field
              type="number"
              name="ans"
              placeholder={"Номер правильного ответа"}
              className="input"
            />
            <ErrorMessage name="ans" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              OK
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
});
