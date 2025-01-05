import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Fonte Montserrat */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Outras configurações ou links */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
