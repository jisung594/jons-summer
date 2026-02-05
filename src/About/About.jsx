import styles from './About.module.css';

export const About = ({ ...props }) => {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <h1>About</h1>
      </div>
      <div className={styles.content}>
        <p>
          I'm a frontend developer focused on translating design into real, usable software. 
          I value patience and attention to detail, and I'm drawn to building interfaces 
          that feel intuitive and human.
        </p>
      </div>
    </div>
  )
}