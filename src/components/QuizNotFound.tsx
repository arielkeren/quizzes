import { Link } from "react-router-dom";
import styles from "../styles/QuizNotFound.module.css";

const QuizNotFound: React.FC = () => (
  <div className={styles.container}>
    <h1 className={styles.text}>Quiz not found</h1>
    <Link to="/" className={styles.button}>
      Go Home
    </Link>
  </div>
);

export default QuizNotFound;
