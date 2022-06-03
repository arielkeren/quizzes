import styles from "../../styles/edit/EditNoQuestions.module.css";

interface Props {
  name: string;
  addQuestion: () => void;
}

const EditNoQuestions: React.FC<Props> = ({ name, addQuestion }) => (
  <div className={styles.container}>
    <h1 className={styles.header}>{name}</h1>
    <p className={styles.text}>
      Looks like your quiz doesn't have any questions
    </p>
    <button onClick={addQuestion} className={styles.button}>
      Add Your First Question
    </button>
  </div>
);

export default EditNoQuestions;
