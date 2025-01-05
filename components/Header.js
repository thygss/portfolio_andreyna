import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo alinhado à esquerda */}
      <div className={styles.logo}>
        <img src="/images/logo1.png" alt="Logo Andrêyna Silva" className={styles.logoImage} />
        <h1>Andrêyna Silva</h1>
      </div>

      {/* Navegação centralizada */}
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Conheça-Me</a></li>
          <li><a href="#">Como Funciona</a></li>
          <li><a href="#">Abordagens</a></li>
          <li><a href="#">Entre em contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
