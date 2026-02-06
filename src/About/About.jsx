import styles from './About.module.css';

export const About = ({ ...props }) => {
  return (
    <div className={`${styles.about} ${styles.fullHeight}`}>
      <div className={styles.experience}>
        <h1 className={styles.experienceTitle}>Professional Experience</h1>
        <ul className={styles.experienceList}>
          <li>React</li>
          <li>JavaScript</li>
          <li>Drupal</li>
          <li>PHP</li>
          <li>HTML/CSS</li>
          <li>Cypress</li>
          <li>Figma</li>
          <li>Storybook</li>
        </ul>
      </div>
      <div className={styles.tools}>
        <h1 className={styles.toolsTitle}>Current Tools</h1>
        <ul className={styles.toolsList}>
          <li>Angular</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
          <li>Firebase</li>
        </ul>
        {/* <div className={styles.content}>
          <p>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          </p>
        </div> */}
      </div>

    </div>
  )
}