import { FaPlus as PlusIcon } from "react-icons/fa";
import Question from "../../interfaces/questionInterface";
import styles from "../../styles/edit/EditHeader.module.css";

interface Props {
  name: string;
  questions: Question[];
  addQuestion: () => void;
  changeQuestion: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const EditHeader: React.FC<Props> = ({
  name,
  questions,
  addQuestion,
  changeQuestion,
}) => (
  <div className={styles.container}>
    <select onChange={changeQuestion} className={styles.dropdown}>
      {questions.map((_, index) => (
        <option value={index + 1} key={index}>
          {index + 1}
        </option>
      ))}
    </select>
    <h1 className={styles.name}>{name}</h1>
    <button onClick={addQuestion} className={styles.button}>
      <PlusIcon />
    </button>
  </div>
);

export default EditHeader;
