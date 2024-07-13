import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import HomePng from '../assets/Home Page .png';
import Config from '../assets/Settings.png';
import Produto from '../assets/Product.png';
import Estoque from '../assets/View Delivery.png';
import left from "../assets/Left Arrow.png";
import right from "../assets/Right Arrow.png";

export default function Sidebar() {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleSidebar = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className={`${styles.container} ${isMinimized ? styles.minimized : ''}`}>
            <div className={styles.header}>
                <button onClick={toggleSidebar} className={styles.toggleButton}>
                    <img src={isMinimized ? right : left} alt="Toggle Arrow" className={styles.toggleIcon} />
                </button>
            </div>
            <hr />
            <div className={styles.content}>
                <div onClick={() => (window.location.href = "/home")}className={styles.options}>
                    <img src={HomePng} className={styles.icones} />
                    {!isMinimized && <p>Home</p>}
                </div>
                <div className={styles.options}>
                    <img src={Estoque} className={styles.icones} />
                    {!isMinimized && <p>Estoque</p>}
                </div>
                <div onClick={() => (window.location.href = "/produtos")}className={styles.options}>
                    <img src={Produto} className={styles.icones} />
                    {!isMinimized && <p>Produtos</p>}
                </div>
                <div className={styles.options}>
                    <img src={Config} className={styles.icones} />
                    {!isMinimized && <p>Settings</p>}
                </div>
            </div>
            <hr />
            <div className={styles.footer}></div>
        </div>
    );
}
