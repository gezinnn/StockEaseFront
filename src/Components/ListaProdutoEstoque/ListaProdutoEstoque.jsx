import React from 'react'
import styles from './ListaProdutoEstoque.module.css'
import CardEstoque from '../CardEstoque/CardEstoque'
import CardProduto from '../CardProduto/CardProduto'

export default function ListaProdutoEstoque() {
  return (
    <div className={styles.container}>
        <p className={styles.title}>Estoque</p>
        <div className={styles.area}>
            <CardEstoque/>
        </div>

        <p className={styles.title}>Produtos</p>
        <div className={styles.area}>
            <CardProduto/>
        </div>
    </div>
  )
}
