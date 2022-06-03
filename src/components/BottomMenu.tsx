import styles from "../styles/BottomMenu.module.css";
import BottomMenuButton from "./BottomMenuButton";

const BottomMenu: React.FC = () => (
  <div className={styles.container}>
    <BottomMenuButton tab="home" />
    <BottomMenuButton tab="play" />
    <BottomMenuButton tab="create" />
    <BottomMenuButton tab="edit" />
  </div>
);

export default BottomMenu;
