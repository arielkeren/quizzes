import { Link } from "react-router-dom";
import styles from "../styles/PageNotFound.module.css";

const PageNotFound: React.FC = () => (
  <div className={styles.container}>
    <h1 className={styles.text}>Page not found</h1>
    <Link to="/" className={styles.button}>
      Go Home
    </Link>
  </div>
);

export default PageNotFound;
