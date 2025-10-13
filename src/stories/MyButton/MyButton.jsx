import PropTypes from 'prop-types';
import styles from './MyButton.module.css';
import { Link } from 'react-router-dom';

/** Primary UI component for user interaction */
export const MyButton = ({
  primary = false,
  // backgroundColor = null,
  size = 'medium',
  label,
  className,
  href,
  ...props
}) => {
  const mode = primary ? styles.primary : styles.secondary;

  return (
    <Link to={href} >
      <button
        type="button"
        className={[styles.button, styles[size], mode, className].join(' ')}
        // style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </Link>
  );
}

MyButton.propTypes = {
  primary: PropTypes.bool,
  // backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
