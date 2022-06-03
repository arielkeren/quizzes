import { AiOutlineLoading as LoadingIcon } from "react-icons/ai";
import styles from "../../styles/edit/EditLoading.module.css";

const EditLoading: React.FC = () => (
  <div className={styles.container}>
    <LoadingIcon className={styles.icon} />
  </div>
);

export default EditLoading;
