import React from 'react'
import styles from './Home.module.css'
import Sidebar from '../../Components/Sidebar'
import ListaProdutoEstoque from '../../Components/ListaProdutoEstoque/ListaProdutoEstoque'

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.nome}>
            <p className={styles.title}>
              StockEase
            </p>
          </div>
          <button className={styles.btn}>Cadastrar Produto</button>
        </div>
        <div className={styles.content}>
          <ListaProdutoEstoque/>
        </div>
      </div>
    </div>
  )
}
