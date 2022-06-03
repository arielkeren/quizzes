import { Link } from "react-router-dom";
import { HiHome as HomeIcon } from "react-icons/hi";
import { IoIosPlay as PlayIcon } from "react-icons/io";
import { FaPlus as CreateIcon } from "react-icons/fa";
import { MdModeEditOutline as EditIcon } from "react-icons/md";
import styles from "../styles/BottomMenuButton.module.css";

interface Props {
  tab: string;
}

const BottomMenuButton: React.FC<Props> = ({ tab }) => (
  <Link
    to={tab === "home" ? "/" : `/${tab}`}
    className={`${styles[tab]} ${styles.button}`}
  >
    {tab === "home" ? (
      <HomeIcon />
    ) : tab === "play" ? (
      <PlayIcon />
    ) : tab === "create" ? (
      <CreateIcon />
    ) : (
      <EditIcon />
    )}
  </Link>
);

export default BottomMenuButton;
