import React from 'react';
import styles from './Contact.module.css'; // Certifique-se de criar o arquivo CSS correspondente

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Entre em Contato</h2>
        <p className={styles.text}>
          Fale comigo pelo WhatsApp, envie um e-mail ou acesse minhas redes sociais.
          Estou aqui para ajudar você nessa jornada!
        </p>
        <div className={styles.buttons}>
          <a
            href="http://wa.me/5511977649261"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            WhatsApp
          </a>
          <a
            href="mailto:mailto:psicologaandreyna@gmail.com"
            target="_blank"
            className={styles.button}
          >
            E-mail
          </a>
        <div className={styles.buttons}>
          <a
            href="https://www.instagram.com/psico.andreyna?igsh=b2N0YTJtbnF0dXpw&utm_source=qr"
            target="_blank"
            className={styles.button}
          >
            Instagram
          </a>
          </div>
          {/* Adicione mais redes sociais aqui */}
        </div>
      </div>
      <div className={styles.image}>
        <img
          src="/images/contato_imagem.png" /* Substitua pela sua imagem */
          alt="Contato"
        />
      </div>
    </div>
  );
};

export default Contact;
