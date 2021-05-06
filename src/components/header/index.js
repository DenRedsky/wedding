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
        <picture>
          <source
            srcset="/couple.webp"
            type="image/webp"
          />
          <img
            className={ styles.couple__image }
            src="/couple.jpg"
            alt="Photo of the couple"
          />
        </picture>
      </div>
    </div>
  );
}
