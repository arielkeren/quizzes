import QuizInterface from "../../interfaces/quizInterface";
import styles from "../../styles/play/QuizTileList.module.css";
import QuizTile from "./QuizTile";

interface Props {
  quizzes: QuizInterface[];
}

const QuizTileList: React.FC<Props> = ({ quizzes }) => (
  <div className={styles.container}>
    {quizzes.map((quiz) => (
      <QuizTile
        name={quiz.name}
        numberOfQuestions={quiz.questions.length}
        link={`/play/${quiz.id}`}
        key={quiz.id}
      />
    ))}
  </div>
);

export default QuizTileList;
