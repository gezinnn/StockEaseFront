import React from 'react';
import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      aaaaa
      <button className={styles.botao} onClick={() => (window.location.href = "/home")}>Ir Para aa Home</button>
    </div>
  );
}
