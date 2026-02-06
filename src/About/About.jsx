import styles from './About.module.css';

export const About = ({ ...props }) => {
  return (
    <div className={`${styles.about} ${styles.fullHeight}`}>
      <div className={styles.experience}>
        <h1 className={styles.experienceTitle}>Professional Experience</h1>
        <ul className={styles.experienceList}>
          <div className={styles.experienceListCol}>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </div>
          <div className={styles.experienceListCol}>
            <li>Drupal</li>
            <li>PHP</li>
            <li>Twig</li>
          </div>
          <div className={styles.experienceListCol}>
            <li>Behat</li>
            <li>Cypress</li>
          </div>
          <div className={styles.experienceListCol}>
            <li>Figma</li>
            <li>Storybook</li>
          </div>
        </ul>
      </div>
      <div className={styles.tools}>
        <h1 className={styles.toolsTitle}>Current Tools</h1>
        <ul className={styles.toolsList}>
          <div className={styles.experienceListCol}>
            <li>Angular</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li>Firebase</li>
          </div>
        </ul>
      </div>

    </div>
  )
}