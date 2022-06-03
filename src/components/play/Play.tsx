import { useEffect, useState } from "react";
import QuizInterface from "../../interfaces/quizInterface";
import styles from "../../styles/play/Play.module.css";
import PlayLoading from "./PlayLoading";
import NoQuizzes from "./NoQuizzes";
import QuizTileList from "./QuizTileList";

const Play: React.FC = () => {
  const [quizzes, setQuizzes] = useState<QuizInterface[] | null>(null);

  useEffect(
    () => setQuizzes(JSON.parse(localStorage.getItem("quizzes") ?? "[]")),
    []
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Play Your Quizzes</h1>
      {quizzes === null ? (
        <PlayLoading />
      ) : quizzes.length === 0 ? (
        <NoQuizzes />
      ) : (
        <QuizTileList quizzes={quizzes} />
      )}
    </div>
  );
};

export default Play;
