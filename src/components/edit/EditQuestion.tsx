import QuizInterface from "../../interfaces/quizInterface";
import styles from "../../styles/edit/EditQuestion.module.css";
import EditHeader from "./EditHeader";
import EditTitle from "./EditTitle";
import EditAnswerTable from "./EditAnswerTable";

interface Props {
  quiz: QuizInterface;
  currentQuestion: number;
  addQuestion: () => void;
  changeQuestion: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  deleteQuestion: () => void;
  save: () => void;
  changeTitle: (newTitle: string, id: string) => void;
  changeText: (newText: string, index: number) => void;
  toggleCorrect: (index: number) => void;
  unsavedChanges: boolean;
}

const EditQuestion: React.FC<Props> = ({
  quiz,
  currentQuestion,
  addQuestion,
  changeQuestion,
  deleteQuestion,
  save,
  changeTitle,
  changeText,
  toggleCorrect,
  unsavedChanges,
}) => (
  <div className={styles.container}>
    <EditHeader
      currentQuestion={currentQuestion}
      name={quiz.name}
      questions={quiz.questions}
      addQuestion={addQuestion}
      changeQuestion={changeQuestion}
      deleteQuestion={deleteQuestion}
      save={save}
    />
    <EditTitle
      title={quiz.questions[currentQuestion - 1].title}
      id={quiz.questions[currentQuestion - 1].id}
      changeTitle={changeTitle}
    />
    <EditAnswerTable
      answers={quiz.questions[currentQuestion - 1].answers}
      changeText={changeText}
      toggleCorrect={toggleCorrect}
    />
    <p className={styles.changes}>
      {unsavedChanges ? "Unsaved Changes" : "Saved"}
    </p>
  </div>
);

export default EditQuestion;
