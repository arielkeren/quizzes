import { Link } from "react-router-dom";
import styles from "../../styles/play/NoQuizzes.module.css";

const NoQuizzes: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.text}>Looks like you don't have any quizzes</h2>
    <Link to="/create" className={styles.link}>
      Create one now
    </Link>
  </div>
);

export default NoQuizzes;
