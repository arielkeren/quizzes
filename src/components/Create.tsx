import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import QuizInterface from "../interfaces/quizInterface";
import styles from "../styles/Create.module.css";

const Create: React.FC = () => {
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState<QuizInterface[]>([]);
  const [name, setName] = useState("");

  useEffect(
    () => setQuizzes(JSON.parse(localStorage.getItem("quizzes") ?? "[]")),
    []
  );

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const create = () => {
    if (name.replace(/ /g, "") === "") {
      alert("Name must contain characters.");
      setName("");
    } else if (name.length > 20) alert("Name must be at most 20 characters.");
    else {
      const newId = uuidv4();
      localStorage.setItem(
        "quizzes",
        JSON.stringify([{ name, questions: [], id: newId }, ...(quizzes ?? [])])
      );
      setQuizzes((prevQuizzes) => [
        { name, questions: [], id: newId },
        ...(prevQuizzes ?? []),
      ]);
      navigate(`/edit/${newId}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Create Your Own Quiz</h1>
      </div>
      <h2 className={styles.text}>Your Quiz's Name</h2>
      <input
        type="text"
        value={name}
        onChange={changeName}
        className={styles.field}
      />
      <button onClick={create} className={styles.button}>
        Create
      </button>
    </div>
  );
};

export default Create;
