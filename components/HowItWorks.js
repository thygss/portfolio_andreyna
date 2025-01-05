import React from 'react';
import styles from './HowItWorks.module.css'; // Certifique-se de criar o arquivo CSS correspondente

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Como Funciona</h2>
      <p className={styles.text}>
        A terapia é um processo de autoconhecimento e desenvolvimento pessoal que proporciona um espaço seguro e acolhedor para você refletir sobre suas questões emocionais e comportamentais. Durante as sessões, trabalhamos juntos para identificar desafios, fortalecer suas habilidades e criar estratégias que promovam equilíbrio e bem-estar.
      </p>
      <br />
      <br />
      <p className={styles.text}>
        Cada sessão tem duração de aproximadamente 50 minutos e pode ser realizada de duas formas: presencialmente, em um espaço confortável localizado na Zona Sul de São Paulo, ou online, para atender às suas necessidades e preferências.
      </p>
      <br />
      <br />
      <p className={styles.text}>
        Atendo tanto crianças com transtornos do neurodesenvolvimento quanto adolescentes e adultos que buscam apoio para lidar com questões como ansiedade, estresse, dificuldades em relacionamentos, fortalecimento de habilidades sociais ou superação de comportamentos desafiadores.
      </p>
      <br />
      <br />
      <p className={styles.text}>
        O sigilo e o respeito são os alicerces do meu trabalho. Meu compromisso é oferecer um atendimento personalizado, no qual você se sinta à vontade para compartilhar suas preocupações e explorar caminhos para uma vida mais equilibrada e satisfatória. Seja qual for sua demanda, estou aqui para ajudar você nessa jornada.
      </p>
    </div>
  );
};

export default HowItWorks;
