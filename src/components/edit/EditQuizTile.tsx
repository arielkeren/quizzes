import { Link } from "react-router-dom";
import { IoCloseSharp as DeleteIcon } from "react-icons/io5";
import { MdModeEditOutline as RenameIcon } from "react-icons/md";
import styles from "../../styles/edit/EditQuizTile.module.css";

interface Props {
  name: string;
  numberOfQuestions: number;
  id: string;
  deleteQuiz: (id: string) => void;
  renameQuiz: (id: string) => void;
}

const QuizTile: React.FC<Props> = ({
  name,
  numberOfQuestions,
  id,
  deleteQuiz,
  renameQuiz,
}) => {
  const deleteThisQuiz = () => deleteQuiz(id);
  const renameThisQuiz = () => renameQuiz(id);

  return (
    <div className={styles.container}>
      <div className={styles.actionsContainer}>
        <DeleteIcon onClick={deleteThisQuiz} className={styles.delete} />
        <RenameIcon onClick={renameThisQuiz} className={styles.rename} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.questions}>
        {numberOfQuestions} {numberOfQuestions === 1 ? "Question" : "Questions"}
      </span>
      <Link to={`/edit/${id}`} className={styles.link}>
        Edit
      </Link>
    </div>
  );
};

export default QuizTile;
