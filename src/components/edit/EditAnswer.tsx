import { BsCheckLg as VIcon } from "react-icons/bs";
import { IoCloseSharp as XIcon } from "react-icons/io5";
import styles from "../../styles/edit/EditAnswer.module.css";

interface Props {
  text: string;
  correct: boolean;
  index: number;
  changeText: (newText: string, index: number) => void;
  toggleCorrect: (index: number) => void;
}

const EditAnswer: React.FC<Props> = ({
  text,
  correct,
  index,
  changeText,
  toggleCorrect,
}) => {
  const toggleThisAnswerCorrect = () => {
    toggleCorrect(index);
  };

  const changeThisText = (event: React.ChangeEvent<HTMLInputElement>) =>
    changeText(event.target.value, index);

  const preventClick = (event: React.MouseEvent<HTMLInputElement>) =>
    event.stopPropagation();

  return (
    <div onClick={toggleThisAnswerCorrect} className={styles.container}>
      <input
        type="text"
        value={text}
        onChange={changeThisText}
        onClick={preventClick}
        placeholder={`Answer ${index + 1}`}
        className={styles.text}
      />
      {correct ? (
        <VIcon className={styles.vIcon} />
      ) : (
        <XIcon className={styles.xIcon} />
      )}
    </div>
  );
};

export default EditAnswer;
