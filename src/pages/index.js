// import styles from './index.module.sass';
import Image from 'next/image';
import Header from 'src/components/header';
import DateAndPlace from 'src/components/dateAndPlace';
import DressCode from 'src/components/dressCode';
import Flowers from 'src/components/flowers';
import Gamma from 'src/components/gamma';
import Hashtag from 'src/components/hashtag';

export default function Main() {
  return (
    <main>
      <Header />
      <DateAndPlace />
      <DressCode />
      <Gamma />
      <Flowers />
      <Hashtag />
    </main>
  );
}
