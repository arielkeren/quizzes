import styles from "../styles/Home.module.css";
import HomeSection from "./HomeSection";

const Home: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <h1 className={styles.headerText}>Quizzes</h1>
    </div>
    <HomeSection section="play" />
    <HomeSection section="create" />
    <HomeSection section="edit" />
  </div>
);

export default Home;
