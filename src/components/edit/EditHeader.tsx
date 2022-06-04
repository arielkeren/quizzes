import { FaPlus as AddIcon } from "react-icons/fa";
import { RiDeleteBinFill as DeleteIcon } from "react-icons/ri";
import { MdSave as SaveIcon } from "react-icons/md";
import Question from "../../interfaces/questionInterface";
import styles from "../../styles/edit/EditHeader.module.css";

interface Props {
  currentQuestion: number;
  name: string;
  questions: Question[];
  addQuestion: () => void;
  changeQuestion: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  deleteQuestion: () => void;
  save: () => void;
}

const EditHeader: React.FC<Props> = ({
  currentQuestion,
  name,
  questions,
  addQuestion,
  changeQuestion,
  deleteQuestion,
  save,
}) => (
  <div className={styles.container}>
    <div className={styles.buttonsContainer}>
      <select
        value={currentQuestion}
        onChange={changeQuestion}
        className={styles.dropdown}
      >
        {questions.map((_, index) => (
          <option value={index + 1} key={index}>
            {index + 1}
          </option>
        ))}
      </select>
      <AddIcon onClick={addQuestion} className={styles.add} />
    </div>
    <h1 className={styles.name}>{name}</h1>
    <div className={styles.buttonsContainer}>
      <DeleteIcon onClick={deleteQuestion} className={styles.delete} />
      <SaveIcon onClick={save} className={styles.save} />
    </div>
  </div>
);

export default EditHeader;
