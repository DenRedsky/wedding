import classnames from 'classnames/bind';

import styles from './styles.module.sass';

const cn = classnames.bind(styles);

const publicPath = process.env.NODE_ENV !== 'development' ? '/wedding' : '';

export default function Download() {
  return (
    <div className={ styles.block }>
      <div className={ cn('text', 'text--head') }>
        Скачать
      </div>
      <div className={ styles.text }>
        Вы можете скачать буклет с данной информацией в&nbsp;формате <a href={ `${ publicPath }/буклет.pdf` } download>PDF</a>.
      </div>
    </div>
  );
}
