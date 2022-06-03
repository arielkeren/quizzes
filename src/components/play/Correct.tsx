import { BsCheckLg as VIcon } from "react-icons/bs";
import styles from "../../styles/play/Correct.module.css";

interface Props {
  nextQuestion: () => void;
}

const Correct: React.FC<Props> = ({ nextQuestion }) => (
  <div className={styles.container}>
    <VIcon className={styles.icon} />
    <button onClick={nextQuestion} className={styles.button}>
      Next Question
    </button>
  </div>
);

export default Correct;
