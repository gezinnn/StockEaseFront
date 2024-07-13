import React from 'react';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <button className={styles.botao} onClick={() => (window.location.href = "/home")}>Ir Para Home</button>
    </div>
  );
}
