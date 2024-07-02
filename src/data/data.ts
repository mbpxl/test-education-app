export type DataArrayType = {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  ans: number | string;
}

export const data: Array<DataArrayType> = [
  {
    question: "Сумма углов в прямоугольном треугольнике равна",
    option1: "90",
    option2: "120",
    option3: "180",
    option4: "270",
    ans: 3,
  },
  {
    question: "Самая густонаселённая страна",
    option1: "Чили",
    option2: "Китай",
    option3: "Уганда",
    option4: "США",
    ans: 2,
  },
  {
    question: "Какая будет реакция при смешивании щёлочи и кислоты?",
    option1: "Нейтрализации",
    option2: "Замещения",
    option3: "Восстановления",
    option4: "Окислительно-восстановительная",
    ans: 1,
  },
  {
    question: "Зависимость между давлением и температурой в МКТ?",
    option1: "Прямая",
    option2: "Обратная",
    option3: "Синусоидная",
    option4: "Тангесальная",
    ans: 1,
  },
  {
    question: "Сколько людей убил Сталин?",
    option1: "100.000",
    option2: "1 млрд",
    option3: "Никого",
    option4: "500.000+",
    ans: 4,
  },
]