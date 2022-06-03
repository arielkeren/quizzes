import { Link } from "react-router-dom";
import styles from "../../styles/play/QuizTile.module.css";

interface Props {
  name: string;
  numberOfQuestions: number;
  link: string;
}

const QuizTile: React.FC<Props> = ({ name, numberOfQuestions, link }) => (
  <div className={styles.container}>
    <h2 className={styles.name}>{name}</h2>
    <span className={styles.questions}>
      {numberOfQuestions} {numberOfQuestions === 1 ? "Question" : "Questions"}
    </span>
    <Link to={link} className={styles.link}>
      Play
    </Link>
  </div>
);

export default QuizTile;
