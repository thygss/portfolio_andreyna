import React from 'react';
import styles from './Approaches.module.css'; // Certifique-se de criar o arquivo CSS correspondente

const Approaches = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Abordagens</h2>
      <p className={styles.text}>
        Em meus atendimentos, utilizo abordagens terapêuticas baseadas em evidências científicas, como a Análise do Comportamento Aplicada (ABA) e a Terapia Cognitivo-Comportamental (TCC), adaptando-as às necessidades de cada paciente.
      </p>
      <br />
      <br />
      <p className={styles.text}>
        A ABA é uma abordagem eficaz não apenas para crianças com Transtorno do Espectro Autista (TEA), mas também pode ser utilizada em diversos outros contextos. Ela é aplicada no desenvolvimento de habilidades sociais, cognitivas e comportamentais, ajudando a promover mudanças positivas em comportamentos desafiadores, além de melhorar a comunicação e a interação social em diferentes faixas etárias.
      </p>
      <br />
      <br />
      <p className={styles.text}>
        A TCC, por sua vez, é uma abordagem prática e estruturada, focada na identificação e reestruturação de padrões de pensamento e comportamento que podem estar causando sofrimento emocional. Ela é especialmente eficaz no tratamento de questões como ansiedade, estresse, depressão e dificuldades em lidar com situações desafiadoras.
      </p>
      <br />
      <br />
      <p className={styles.text}>
        Combinando essas técnicas, meu objetivo é oferecer um atendimento acolhedor e eficaz, apoiando crianças, adolescentes e adultos na superação de seus desafios e no alcance de uma vida mais equilibrada e satisfatória.
      </p>
    </div>
  );
};

export default Approaches;
