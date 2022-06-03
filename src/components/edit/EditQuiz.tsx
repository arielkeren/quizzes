import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import QuizInterface from "../../interfaces/quizInterface";
import EditQuestion from "./EditQuestion";
import EditNoQuestions from "./EditNoQuestions";
import QuizNotFound from "../QuizNotFound";
import Loading from "../Loading";

const EditQuiz: React.FC = () => {
  const { id } = useParams();

  const [quizzes, setQuizzes] = useState<QuizInterface[] | null>(null);
  const [quiz, setQuiz] = useState<QuizInterface | undefined>();
  const [quizIndex, setQuizIndex] = useState(-1);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  useEffect(() => {
    const storedQuizzes = localStorage.getItem("quizzes") ?? "[]";
    setQuizzes(JSON.parse(storedQuizzes));
    setQuiz(
      JSON.parse(storedQuizzes).find((quiz: QuizInterface) => quiz.id === id)
    );
    setQuizIndex(
      JSON.parse(storedQuizzes).findIndex(
        (quiz: QuizInterface) => quiz.id === id
      )
    );
  }, []);

  const save = () => {
    if (quiz === undefined || quizzes === null) return;
    if (
      quiz.questions.some((question) => question.title.replace(/ /g, "") === "")
    ) {
      alert("Every question must have a title.");
      return;
    }
    if (
      quiz.questions.some((question) => {
        const { answers } = question;
        const [answer1, answer2, answer3, answer4] = answers;
        let { text: a1 } = answer1;
        let { text: a2 } = answer2;
        let { text: a3 } = answer3;
        let { text: a4 } = answer4;
        a1 = a1.replace(/ /g, "");
        a2 = a2.replace(/ /g, "");
        a3 = a3.replace(/ /g, "");
        a4 = a4.replace(/ /g, "");
        const t1 = a1 === "";
        const t2 = a2 === "";
        const t3 = a3 === "";
        const t4 = a4 === "";
        return (
          (t1 && t2 && t3) ||
          (t1 && t2 && t4) ||
          (t1 && t3 && t4) ||
          (t2 && t3 && t4)
        );
      })
    ) {
      alert("Every question must have at least two answers.");
      return;
    }
    if (
      !quiz.questions.every((question) =>
        question.answers
          .filter((answer) => answer.text !== "")
          .some((answer) => answer.correct)
      )
    ) {
      alert("Every question must have at least one correct answer.");
      return;
    }
    const newQuizzes = [...quizzes];
    newQuizzes[quizIndex] = quiz;
    localStorage.setItem("quizzes", JSON.stringify(newQuizzes));
  };

  const addQuestion = () => {
    if (quiz === undefined) return;
    const newQuiz = JSON.parse(JSON.stringify(quiz));
    newQuiz.questions.push({
      title: "",
      answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: false },
      ],
      id: uuidv4(),
    });
    setQuiz(newQuiz);
  };

  const changeQuestion = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setCurrentQuestion(Number(event.target.value));

  const changeTitle = (newTitle: string, id: string) => {
    if (quiz === undefined) return;
    const newQuiz: QuizInterface = JSON.parse(JSON.stringify(quiz));
    const targetQuestion = quiz.questions.find(
      (question) => question.id === id
    );
    const targetQuestionIndex = quiz.questions.findIndex(
      (question) => question.id === id
    );
    if (targetQuestion !== undefined && targetQuestionIndex !== -1) {
      targetQuestion.title = newTitle;
      newQuiz.questions[targetQuestionIndex] = targetQuestion;
      setQuiz(newQuiz);
    }
  };

  const changeText = (newText: string, index: number) => {
    const newQuiz: QuizInterface = JSON.parse(JSON.stringify(quiz));
    newQuiz.questions[currentQuestion - 1].answers[index].text = newText;
    setQuiz(newQuiz);
  };

  const toggleCorrect = (index: number) => {
    const newQuiz: QuizInterface = JSON.parse(JSON.stringify(quiz));
    newQuiz.questions[currentQuestion - 1].answers[index].correct =
      !newQuiz.questions[currentQuestion - 1].answers[index].correct;
    setQuiz(newQuiz);
  };

  return (
    <>
      {quizzes === null ? (
        <Loading />
      ) : quiz === undefined ? (
        <QuizNotFound />
      ) : quiz.questions.length === 0 ? (
        <EditNoQuestions name={quiz.name} addQuestion={addQuestion} />
      ) : (
        <EditQuestion
          quiz={quiz}
          currentQuestion={currentQuestion}
          addQuestion={addQuestion}
          changeQuestion={changeQuestion}
          save={save}
          changeTitle={changeTitle}
          changeText={changeText}
          toggleCorrect={toggleCorrect}
        />
      )}
    </>
  );
};

export default EditQuiz;
