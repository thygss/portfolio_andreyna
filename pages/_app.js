import '../styles/globals.css';
import '../components/Header.module.css';

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
