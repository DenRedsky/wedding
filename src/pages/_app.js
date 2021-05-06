import Head from 'next/head';

import 'src/styles/global.sass';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Свадьба Дениса и Ирины
        </title>
      </Head>
      <Component { ...pageProps } />
    </>
  );
}
