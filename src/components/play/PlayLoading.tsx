import { AiOutlineLoading as LoadingIcon } from "react-icons/ai";
import styles from "../../styles/play/PlayLoading.module.css";

const PlayLoading: React.FC = () => (
  <div className={styles.container}>
    <LoadingIcon className={styles.icon} />
  </div>
);

export default PlayLoading;
