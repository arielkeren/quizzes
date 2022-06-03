import styles from "../../styles/edit/SaveButton.module.css";

interface Props {
  save: () => void;
}

const SaveButton: React.FC<Props> = ({ save }) => (
  <button onClick={save} className={styles.button}>
    Save
  </button>
);

export default SaveButton;
