import { Bio } from './Bio/Bio.jsx';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.homepageHeader}>

        <h1> header placeholder</h1>

      </header>


      {/* <h3 className={styles.homepageTitle}> :) HELLO FIRST FUNEMPLOYMENT PROJECT :) </h3> */}
      <h3 className={styles.homepageTitle}>Hi, my name is Jon.</h3>



      <Bio />

      <div className={styles.loafImages}>
        <img src="/images/boule_1.jpg" alt="loaf of bread" />
        <img src="/images/boule_2.jpg" alt="loaf of bread" />
      </div>

    </div>
  );
}

export default App;
