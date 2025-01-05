import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Conheça-me</h2>
      <p className={styles.text}>
      Sou graduada em Psicologia,
      pela Universidade Católica Ítalo-Brasileiro e especializada em Análise do Comportamento Aplicada (ABA). Atualmente, estou cursando uma pós-graduação em Terapia Cognitivo-Comportamental (TCC) pela PUC-RS.
      </p>
      <br/>
      <br/>
      <p className={styles.text}>
      Ao longo da minha trajetória, tenho atuado em áreas como desenvolvimento emocional, aprimoramento de habilidades cognitivas e sociais, promoção da saúde mental e manejo de comportamentos desafiadores. Atendo desde crianças com transtornos do neurodesenvolvimento até adultos que desejam alcançar equilíbrio emocional, fortalecer habilidades sociais ou desenvolver estratégias eficazes para lidar com ansiedade, estresse entre outros desafios do dia a dia.
      </p>
      <br/>
      <br/>
      <p className={styles.text}>
      Entre minhas contribuições acadêmicas, publiquei o artigo científico “O processo de ganhos de habilidades cognitivas no desenvolvimento atípicos em crianças com DI”, presente no livro Psicologia da Saúde. Também ministrei palestras sobre inclusão social, autismo, saúde mental no dia a dia e práticas da ABA, compartilhando conhecimento e promovendo reflexões para um cuidado mais humano e empático.
      Seja para superar desafios emocionais, desenvolver habilidades ou simplesmente encontrar um espaço de acolhimento, estou aqui para ajudar você a trilhar seu caminho com mais segurança e bem-estar.
      </p>
    </div>
  );
};

export default AboutSection;
