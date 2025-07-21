import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyInput.module.css';

/**
 * Primary UI component for user input.
 */
export const MyInput = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  id,
  ...props
}) => {
  const inputId = id || `my-input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.inputField}
        {...props}
      />
    </div>
  );
};

MyInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};

MyInput.defaultProps = {
  placeholder: '',
  type: 'text',
  value: undefined, // allows controlled/uncontrolled behavior
  onChange: undefined,
  id: undefined,
};
