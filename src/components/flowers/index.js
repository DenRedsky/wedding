import classnames from 'classnames/bind';

import styles from './styles.module.sass';

const cn = classnames.bind(styles);

export default function Flowers() {
  return (
    <div className={ styles.block }>
      <div className={ cn('text', 'text--head') }>
        Цветы
      </div>
      <div className={ styles.text }>
        Мы&nbsp;знаем что на&nbsp;Свадьбах принято дарить цветы.
        Пожалуйста, не&nbsp;дарите нам букеты, так как мы&nbsp;не&nbsp;сможем насладиться их&nbsp;красотой
      </div>
    </div>
  );
}
