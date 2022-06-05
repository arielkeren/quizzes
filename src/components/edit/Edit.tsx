import { useEffect, useState } from "react";
import QuizInterface from "../../interfaces/quizInterface";
import styles from "../../styles/edit/Edit.module.css";
import EditLoading from "./EditLoading";
import EditNoQuizzes from "./EditNoQuizzes";
import EditQuizTileList from "./EditQuizTileList";

const Edit: React.FC = () => {
  const [quizzes, setQuizzes] = useState<QuizInterface[] | null>(null);

  useEffect(
    () => setQuizzes(JSON.parse(localStorage.getItem("quizzes") ?? "[]")),
    []
  );

  const deleteQuiz = (id: string) => {
    if (quizzes === null) return;
    const quizIndex = quizzes.findIndex((quiz) => quiz.id === id);
    const newQuizzes = [...quizzes];
    newQuizzes.splice(quizIndex, 1);
    localStorage.setItem("quizzes", JSON.stringify(newQuizzes));
    setQuizzes(newQuizzes);
  };

  const renameQuiz = (id: string) => {
    if (quizzes === null) return;
    const quizIndex = quizzes.findIndex((quiz) => quiz.id === id);
    const newQuizzes = [...quizzes];
    const newName = prompt("Enter the new name:");
    if (newName !== null) {
      if (newName.replace(/ /g, "") === "")
        alert("There must be characters in the quiz's name.");
      else if (newName.length > 20)
        alert("The quiz's name must be at most 20 characters.");
      else newQuizzes[quizIndex].name = newName;
    }
    localStorage.setItem("quizzes", JSON.stringify(newQuizzes));
    setQuizzes(newQuizzes);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Edit Your Quizzes</h1>
      </div>
      {quizzes === null ? (
        <EditLoading />
      ) : quizzes.length === 0 ? (
        <EditNoQuizzes />
      ) : (
        <EditQuizTileList
          quizzes={quizzes}
          deleteQuiz={deleteQuiz}
          renameQuiz={renameQuiz}
        />
      )}
    </div>
  );
};

export default Edit;
