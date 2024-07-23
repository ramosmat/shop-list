import React from 'react';
import styles from './Input.module.css';

const Input = ({ label }) => {
  return (
    <section className={styles.gridItem}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input className={styles.input} id={label} type="text" />
    </section>
  );
};

export default Input;
