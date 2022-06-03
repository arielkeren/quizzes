import { Link } from "react-router-dom";
import styles from "../../styles/play/Ending.module.css";

interface Props {
  correctAnswers: number;
  totalQuestions: number;
}

const Ending: React.FC<Props> = ({ correctAnswers, totalQuestions }) => (
  <div className={styles.container}>
    <p className={styles.questions}>
      Of <span className={styles.questionsNumber}>{totalQuestions}</span>{" "}
      {totalQuestions === 1 ? "Question" : "Questions"}, You Got:
    </p>
    <p className={styles.correct}>{correctAnswers} Correct</p>
    <p className={styles.incorrect}>
      {totalQuestions - correctAnswers} Incorrect
    </p>
    <p className={styles.percentage}>
      That's {((correctAnswers * 100) / totalQuestions).toFixed(0)}% Correct!
    </p>
    <Link to="/" className={styles.button}>
      Go Home
    </Link>
  </div>
);

export default Ending;
