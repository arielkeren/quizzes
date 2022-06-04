import { Link } from "react-router-dom";
import styles from "../../styles/home/HomeSection.module.css";

interface Props {
  section: string;
}

const HomeSection: React.FC<Props> = ({ section }) => (
  <Link to={`/${section}`} className={`${styles.container} ${styles[section]}`}>
    <h2 className={styles.title}>
      {section === "play" ? "Play" : section === "create" ? "Create" : "Edit"}
    </h2>
    <p className={styles.text}>
      {section === "play"
        ? "Play your quizzes"
        : section === "create"
        ? "Create your own quiz"
        : "Edit your quizzes"}
    </p>
  </Link>
);

export default HomeSection;
