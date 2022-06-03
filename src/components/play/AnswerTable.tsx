import styles from "../../styles/play/AnswerTable.module.css";
import Answer from "./Answer";

interface Props {
  answers: string[];
  answerClick: (index: number) => void;
}

const AnswerTable: React.FC<Props> = ({ answers, answerClick }) => (
  <div className={styles.container}>
    <div className={styles.row}>
      <Answer text={answers[0]} index={0} answerClick={answerClick} />
      <Answer text={answers[1]} index={1} answerClick={answerClick} />
    </div>
    <div className={styles.row}>
      <Answer text={answers[2]} index={2} answerClick={answerClick} />
      <Answer text={answers[3]} index={3} answerClick={answerClick} />
    </div>
  </div>
);

export default AnswerTable;
