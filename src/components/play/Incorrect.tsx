import { IoCloseSharp as XIcon } from "react-icons/io5";
import styles from "../../styles/play/Incorrect.module.css";

interface Props {
  nextQuestion: () => void;
}

const Incorrect: React.FC<Props> = ({ nextQuestion }) => (
  <div className={styles.container}>
    <XIcon className={styles.icon} />
    <button onClick={nextQuestion} className={styles.button}>
      Next Question
    </button>
  </div>
);

export default Incorrect;
