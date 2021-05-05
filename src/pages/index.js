import Head from 'next/head';
import Header from 'src/components/header';
import DateAndPlace from 'src/components/dateAndPlace';
import DressCode from 'src/components/dressCode';
import Flowers from 'src/components/flowers';
import Hashtag from 'src/components/hashtag';

import styles from './styles.module.sass';

export default function Main() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@400;500&family=Amatic+SC:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Wedding</title>
      </Head>
      <main>
        <Header />
        <div className={ styles.content }>
          <DateAndPlace />
          <DressCode />
          <Flowers />
          <Hashtag />
        </div>
      </main>
    </>
  );
}
