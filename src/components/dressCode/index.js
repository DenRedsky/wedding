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
        <span className={ cn('text--head') }>Дамы:</span> коктейльное платье
      </div>
      <div className={ styles.text }>
        Нам будет приятно, если дамы поддержат цветовую гамму нашего праздника и&nbsp;воздержатся от&nbsp;белого при выборе наряда
      </div>
      <div className={ styles.cubes }>
        <div className={ cn('cube', 'cube--1') } />
        <div className={ cn('cube', 'cube--2') } />
        <div className={ cn('cube', 'cube--3') } />
        <div className={ cn('cube', 'cube--4') } />
      </div>
    </div>
  );
}
