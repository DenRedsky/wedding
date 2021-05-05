import classnames from 'classnames/bind';

import styles from './styles.module.sass';

const cn = classnames.bind(styles);

export default function Gamma() {
  return (
    <div className={ styles.block }>
      <div id="gamma" className={ cn('text', 'text--head') }>
        Гамма
      </div>
      <div className={ styles.text }>
        Использование пастельных оттенков: белый, молочный, бежевый и&nbsp;разнообразие зелени
      </div>
      <div className={ styles.cubes }>
        <div className={ cn('cube', 'cube--1') } />
        <div className={ cn('cube', 'cube--2') } />
        <div className={ cn('cube', 'cube--3') } />
        <div className={ cn('cube', 'cube--4') } />
        <div className={ cn('cube', 'cube--5') } />
      </div>
    </div>
  );
}
