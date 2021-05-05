import classnames from 'classnames/bind';

import styles from './styles.module.sass';

const cn = classnames.bind(styles);

export default function DressCode() {
  return (
    <div className={ styles.block }>
      <div className={ cn('text', 'text--head') }>
        Дресс-код
      </div>
      <div className={ styles.text }>
        <span className={ cn('text--head') }>Джентльмены:</span> классический костюм или рубашка и&nbsp;брюки чинос
      </div>
      <div className={ styles.text }>
        <span className={ cn('text--head') }>Дамы:</span> коктейльное платье,
        будет приятно если&nbsp;Вы поддержите цветовую { ' ' }
        <a className={ cn('text--head') } href="#gamma">гамму</a> нашего праздника при выборе наряда
      </div>
    </div>
  );
}
