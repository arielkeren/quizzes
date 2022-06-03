import { AiOutlineLoading as LoadingIcon } from "react-icons/ai";
import styles from "../styles/Loading.module.css";

const Loading: React.FC = () => (
  <div className={styles.container}>
    <LoadingIcon className={styles.icon} />
  </div>
);

export default Loading;
