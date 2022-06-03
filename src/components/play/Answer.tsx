import styles from "../../styles/play/Answer.module.css";

interface Props {
  text: string;
  index: number;
  answerClick: (index: number) => void;
}

const Answer: React.FC<Props> = ({ text, index, answerClick }) => {
  const thisAnswerClick = () => answerClick(index);

  return (
    <button onClick={thisAnswerClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Answer;
