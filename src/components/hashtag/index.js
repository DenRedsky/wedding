import styles from './styles.module.sass';

export default function Hashtag() {
  const link = 'love_dance_champagne_repeat';

  return (
    <div className={ styles.block }>
      <a target="_blank" href={ `https://www.instagram.com/explore/tags/${ link }` }>
        #{ link }
      </a>

      <div>
        До встречи!
      </div>
    </div>
  );
}
