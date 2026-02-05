import styles from './About.module.css';

export const About = ({ ...props }) => {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <h1>About</h1>
      </div>
      <div className={styles.content}>
        <p>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  )
}