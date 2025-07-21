import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MyToggle.module.css';

/**
 * Primary UI component for a toggle switch.
 * Features Off, Focus, Hover, and On states.
 */
export const MyToggle = ({
  initialState = false,
  onToggle,
  label,
  ...props
}) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  const toggleText = isOn ? 'ON' : 'OFF';

  return (
    <label className={styles.toggleWrapper} {...props}>
      {/* Hidden checkbox for accessibility and native form behavior */}
      <input
        type="checkbox"
        className={styles.toggleInput}
        checked={isOn}
        onChange={handleToggle}
        role="switch" // ARIA role for accessibility
        aria-checked={isOn}
        aria-label={label || "Toggle switch"}
      />
      <div className={styles.toggleContainer}>
        <div className={styles.toggleTrack}>
          <div className={`${styles.toggleThumb} ${isOn ? styles.toggleThumbOn : ''}`}></div>
          <span className={`${styles.toggleLabelText} ${isOn ? styles.toggleLabelTextOn : ''}`}>
            {toggleText}
          </span>
        </div>
      </div>
    </label>
  );
};

MyToggle.propTypes = {
  initialState: PropTypes.bool,
  onToggle: PropTypes.func,
  label: PropTypes.string,
};

MyToggle.defaultProps = {
  initialState: false,
  onToggle: undefined,
  label: undefined,
};
