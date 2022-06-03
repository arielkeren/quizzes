import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuizInterface from "../../interfaces/quizInterface";
import QuizNotFound from "../QuizNotFound";
import Ending from "./Ending";
import Question from "./Question";
import NoQuestions from "./NoQuestions";
import Correct from "./Correct";
import Incorrect from "./Incorrect";
import Loading from "../Loading";

const Quiz: React.FC = () => {
  const { id } = useParams();

  const [quiz, setQuiz] = useState<QuizInterface | null | undefined>(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  useEffect(
    () =>
      setQuiz(
        JSON.parse(localStorage.getItem("quizzes") ?? "[]").find(
          (quiz: QuizInterface) => quiz.id === id
        )
      ),
    []
  );

  const nextQuestion = () => {
    setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    setCorrect(false);
    setWrong(false);
  };

  const answerClick = (index: number) => {
    if (quiz === undefined || quiz === null) return;
    if (
      quiz.questions[currentQuestion - 1].answers[index].text.replace(
        / /g,
        ""
      ) === ""
    ) {
      alert("Not a possible answer.");
      return;
    }
    if (quiz.questions[currentQuestion - 1].answers[index].correct) {
      setCorrect(true);
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    } else setWrong(true);
  };

  return (
    <>
      {quiz === null ? (
        <Loading />
      ) : quiz === undefined ? (
        <QuizNotFound />
      ) : quiz.questions.length === 0 && id !== undefined ? (
        <NoQuestions id={id} />
      ) : quiz.questions.length === currentQuestion - 1 ? (
        <Ending
          correctAnswers={correctAnswers}
          totalQuestions={quiz.questions.length}
        />
      ) : correct ? (
        <Correct nextQuestion={nextQuestion} />
      ) : wrong ? (
        <Incorrect nextQuestion={nextQuestion} />
      ) : (
        <Question
          question={quiz.questions[currentQuestion - 1]}
          answerClick={answerClick}
        />
      )}
    </>
  );
};

export default Quiz;
