import PropTypes from 'prop-types';
import styles from '../App.module.css';

export const Bio = ({

  ...props
}) => {
  return (
    <div className={styles.bioTextSections}>
        <p>My Korean name is Jisung,
          and it was the name I grew up using until I was 17
          when I got my US citizenship.
        </p>

        <p>
          Due to federal budgets cuts earlier in the year,
          the company I worked at for about 4 years was affected
          and I was laid off.
        </p>

        <p>
          Surpisingly enough, I've been wholeheartedly enjoying
          my funemployment. I've been 
            <ul className={styles.bioHobbies}>
                <li>learning to bake loaves of bread</li> 
                <li>and restore (basic) furniture</li>
                <li>tending to my patio garden</li>
                <li>and taking my dog on longer walks.</li>
            </ul>
        </p>

        <p>
          This [event] did give me a clearer headspace to re-evaluate my personal goals,
          including those as a web developer. I've always looked to work my background in
          graphic design into my dev work where I can, so I decided to build a mini component library
          as a fun personal project / portfolio piece. I used Figma to design my components 
          and Storybook to build and style them.
        </p>

      </div>
  );
};

Bio.propTypes = {
  
};
