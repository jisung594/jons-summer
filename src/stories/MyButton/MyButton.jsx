import PropTypes from 'prop-types';

import styles from './MyButton.module.css';

/** Primary UI component for user interaction */
export const MyButton = ({
  primary = false,
  // backgroundColor = null,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? styles.primary : styles.secondary;
  return (
    <button
      type="button"
      className={[styles.button, styles[size], mode].join(' ')}
      // style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

MyButton.propTypes = {
  primary: PropTypes.bool,
  // backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
