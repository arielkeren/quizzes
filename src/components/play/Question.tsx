import QuestionInterface from "../../interfaces/questionInterface";
import styles from "../../styles/play/Question.module.css";
import AnswerTable from "./AnswerTable";

interface Props {
  question: QuestionInterface;
  answerClick: (index: number) => void;
}

const Question: React.FC<Props> = ({ question, answerClick }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{question.title}</h1>
    <AnswerTable
      answers={question.answers.map((answer) => answer.text)}
      answerClick={answerClick}
    />
  </div>
);

export default Question;
