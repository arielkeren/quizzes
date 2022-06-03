import QuizInterface from "../../interfaces/quizInterface";
import styles from "../../styles/edit/EditQuizTileList.module.css";
import EditQuizTile from "./EditQuizTile";

interface Props {
  quizzes: QuizInterface[];
  deleteQuiz: (id: string) => void;
}

const EditQuizTileList: React.FC<Props> = ({ quizzes, deleteQuiz }) => (
  <div className={styles.container}>
    {quizzes.map((quiz) => (
      <EditQuizTile
        name={quiz.name}
        numberOfQuestions={quiz.questions.length}
        id={quiz.id}
        deleteQuiz={deleteQuiz}
        key={quiz.id}
      />
    ))}
  </div>
);

export default EditQuizTileList;
