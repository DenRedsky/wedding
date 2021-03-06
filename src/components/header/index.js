import styles from './styles.module.sass';

const imagePath = process.env.NODE_ENV !== 'development' ? '/wedding' : '';

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
            srcSet={ `${ imagePath }/couple.webp` }
            type="image/webp"
          />
          <img
            className={ styles.couple__image }
            src={ `${ imagePath }/couple.jpg` }
            alt="Photo of the couple"
          />
        </picture>
      </div>
    </div>
  );
}
