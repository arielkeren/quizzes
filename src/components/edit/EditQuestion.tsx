import QuizInterface from "../../interfaces/quizInterface";
import styles from "../../styles/edit/EditQuestion.module.css";
import EditHeader from "./EditHeader";
import EditTitle from "./EditTitle";
import EditAnswerTable from "./EditAnswerTable";
import SaveButton from "./SaveButton";

interface Props {
  quiz: QuizInterface;
  currentQuestion: number;
  addQuestion: () => void;
  changeQuestion: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  save: () => void;
  changeTitle: (newTitle: string, id: string) => void;
  changeText: (newText: string, index: number) => void;
  toggleCorrect: (index: number) => void;
}

const EditQuestion: React.FC<Props> = ({
  quiz,
  currentQuestion,
  addQuestion,
  changeQuestion,
  save,
  changeTitle,
  changeText,
  toggleCorrect,
}) => (
  <div className={styles.container}>
    <EditHeader
      name={quiz.name}
      questions={quiz.questions}
      addQuestion={addQuestion}
      changeQuestion={changeQuestion}
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
    <SaveButton save={save} />
  </div>
);

export default EditQuestion;
