import '../styles/globals.css';
import '../components/Header.module.css'; // Certifique-se de que o caminho está correto

import { Montserrat } from 'next/font/google'; // Corrigindo a importação
const montserrat = Montserrat({
  subsets: ['latin'], // Subconjuntos usados
  weight: ['400', '700'], // Pesos da fonte
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
