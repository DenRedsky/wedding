import Image from 'next/image';

import styles from './styles.module.sass';

export default function Header() {
  return (
    <div>
      <h1 className={ styles.title }>
        Денис & Ирина
      </h1>
      <div className={ styles.couple }>
        <h1 className={ styles.couple__text }>
          МАЙ | 27 | 2021
        </h1>
        <Image
          src="/couple.jpg"
          alt="Picture of the couple"
          layout="responsive"
          width={ 1280 }
          height={ 853 }
        />
      </div>
    </div>
  );
}
