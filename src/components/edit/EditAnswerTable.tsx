import AnswerInterface from "../../interfaces/answerInterface";
import styles from "../../styles/edit/EditAnswerTable.module.css";
import EditAnswer from "./EditAnswer";

interface Props {
  answers: AnswerInterface[];
  changeText: (newText: string, index: number) => void;
  toggleCorrect: (index: number) => void;
}

const EditAnswerTable: React.FC<Props> = ({
  answers,
  changeText,
  toggleCorrect,
}) => (
  <div className={styles.container}>
    <div className={styles.row}>
      <EditAnswer
        text={answers[0].text}
        correct={answers[0].correct}
        index={0}
        changeText={changeText}
        toggleCorrect={toggleCorrect}
      />
      <EditAnswer
        text={answers[1].text}
        correct={answers[1].correct}
        index={1}
        changeText={changeText}
        toggleCorrect={toggleCorrect}
      />
    </div>
    <div className={styles.row}>
      <EditAnswer
        text={answers[2].text}
        correct={answers[2].correct}
        index={2}
        changeText={changeText}
        toggleCorrect={toggleCorrect}
      />
      <EditAnswer
        text={answers[3].text}
        correct={answers[3].correct}
        index={3}
        changeText={changeText}
        toggleCorrect={toggleCorrect}
      />
    </div>
  </div>
);

export default EditAnswerTable;
