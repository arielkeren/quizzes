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
  }, [id]);

  const save = () => {
    if (quiz === undefined || quizzes === null) return;
    if (
      quiz.questions.some((question) => question.title.replace(/ /g, "") === "")
    )
      alert("Every question must have a title.");
    else if (
      quiz.questions.some((question) => {
        const { answers } = question;
        const [{ text: a1 }, { text: a2 }, { text: a3 }, { text: a4 }] =
          answers;
        const t1 = a1.replace(/ /g, "") === "";
        const t2 = a2.replace(/ /g, "") === "";
        const t3 = a3.replace(/ /g, "") === "";
        const t4 = a4.replace(/ /g, "") === "";
        return (
          (t1 && t2 && t3) ||
          (t1 && t2 && t4) ||
          (t1 && t3 && t4) ||
          (t2 && t3 && t4)
        );
      })
    )
      alert("Every question must have at least two answers.");
    else if (
      !quiz.questions.every((question) =>
        question.answers
          .filter((answer) => answer.text !== "")
          .some((answer) => answer.correct)
      )
    )
      alert("Every question must have at least one correct answer.");
    else if (quiz.questions.some((question) => question.title.length > 100))
      alert("Every title must be at most 100 characters.");
    else if (
      quiz.questions.some((question) =>
        question.answers.some((answer) => answer.text.length > 30)
      )
    )
      alert("Every answer must be at most 30 characters");
    else {
      const newQuizzes = [...quizzes];
      newQuizzes[quizIndex] = quiz;
      localStorage.setItem("quizzes", JSON.stringify(newQuizzes));
      setQuizzes(newQuizzes);
    }
  };

  const addQuestion = () => {
    if (quiz === undefined) return;
    const newQuiz: QuizInterface = JSON.parse(JSON.stringify(quiz));
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
    setCurrentQuestion(newQuiz.questions.length);
  };

  const changeQuestion = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setCurrentQuestion(Number(event.target.value));

  const changeTitle = (newTitle: string, id: string) => {
    if (quiz === undefined) return;
    const questionIndex = quiz.questions.findIndex(
      (question) => question.id === id
    );
    if (questionIndex !== -1) {
      const newQuiz: QuizInterface = JSON.parse(JSON.stringify(quiz));
      const newQuestion = JSON.parse(
        JSON.stringify(quiz.questions[questionIndex])
      );
      newQuestion.title = newTitle;
      newQuiz.questions[questionIndex] = newQuestion;
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

  const deleteQuestion = () => {
    if (quizzes === null) return;
    if (window.confirm("Delete question?")) {
      const newQuiz: QuizInterface = JSON.parse(JSON.stringify(quiz));
      newQuiz.questions.splice(currentQuestion - 1, 1);
      setQuiz(newQuiz);
      setCurrentQuestion((prevCurrentQuestion) =>
        prevCurrentQuestion === 1
          ? prevCurrentQuestion
          : prevCurrentQuestion - 1
      );
      const newQuizzes = [...quizzes];
      newQuizzes[quizIndex] = newQuiz;
      localStorage.setItem("quizzes", JSON.stringify(newQuizzes));
    }
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
          deleteQuestion={deleteQuestion}
          save={save}
          changeTitle={changeTitle}
          changeText={changeText}
          toggleCorrect={toggleCorrect}
          unsavedChanges={
            JSON.stringify(quiz) !== JSON.stringify(quizzes[quizIndex])
          }
        />
      )}
    </>
  );
};

export default EditQuiz;
