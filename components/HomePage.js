import React from "react";
import Header from "./Header";
import AboutSection from "./AboutSection";
import HowItWorks from "./HowItWorks";
import Approaches from "./Approaches";
import Contact from "./Contact";
import styles from "./HomePage.module.css";


const HomePage = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <Header />

      {/* Seção Principal */}
      <main className={styles.hero}>
        <div className={styles.content}>
          <h2>Bem-vindo ao meu espaço de cuidado e acolhimento</h2>
          <p>
            Sou Andrêyna, Terapeuta clínica especializada em ABA e em
            especialização em TCC, dedicada a apoiar crianças, adolescentes e
            jovens em seus desafios emocionais e comportamentais. Meu compromisso
            é oferecer um ambiente seguro, empático e personalizado para promover
            desenvolvimento e bem-estar.
          </p>
          <a
          href="http://wa.me/5511977649261"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          >
          Agendar atendimento!
        </a>
        </div>

        <div className={styles.image}>
          <img
            src="/images/andreyna_sem_fundo.png"
            alt="Terapeuta Andrêyna Lima"
          />
        </div>
      </main>

      {/* Seção Adicional */}
      <AboutSection />
      
      {/* Seção de Como Funciona */}
      <HowItWorks />

      {/* Seção de Abordagens */}
      <Approaches />

      {/* Seção de Contato */}
      <Contact />
    </div>
  );
};

export default HomePage;
