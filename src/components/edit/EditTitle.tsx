import styles from "../../styles/edit/EditTitle.module.css";

interface Props {
  title: string;
  id: string;
  changeTitle: (newTitle: string, id: string) => void;
}

const EditTitle: React.FC<Props> = ({ title, id, changeTitle }) => {
  const changeThisQuestionTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => changeTitle(event.target.value, id);

  return (
    <input
      type="text"
      value={title}
      onChange={changeThisQuestionTitle}
      placeholder="Title"
      maxLength={100}
      className={styles.title}
    />
  );
};

export default EditTitle;
