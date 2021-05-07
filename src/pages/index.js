import Header from 'src/components/header';
import DateAndPlace from 'src/components/dateAndPlace';
import DressCode from 'src/components/dressCode';
import Flowers from 'src/components/flowers';
import Hashtag from 'src/components/hashtag';
import Download from 'src/components/download';

import styles from './styles.module.sass';

export default function Main() {
  return (
    <main>
      <Header />
      <div className={ styles.content }>
        <DateAndPlace />
        <DressCode />
        <Flowers />
        <Download />
        <Hashtag />
      </div>
    </main>
  );
}
