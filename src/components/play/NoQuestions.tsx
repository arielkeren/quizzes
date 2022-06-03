import { Link } from "react-router-dom";
import styles from "../../styles/play/NoQuestions.module.css";

interface Props {
  id: string;
}

const NoQuestions: React.FC<Props> = ({ id }) => (
  <div className={styles.container}>
    <p className={styles.text}>
      Looks like your quiz doesn't have any questions
    </p>
    <Link to={`/edit/${id}`} className={styles.link}>
      Add Your First Question
    </Link>
  </div>
);

export default NoQuestions;
