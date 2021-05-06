import classnames from 'classnames/bind';

import styles from './styles.module.sass';

const cn = classnames.bind(styles);

const imagePath = process.env.NODE_ENV !== 'development' ? '/wedding' : '';

export default function DateAndPlace() {
  return (
    <div className={ styles.block }>
      <picture>
        <source
          srcSet={`${ imagePath  }/flowers.webp`}
          type="image/webp"
        />
        <img
          className={ styles.flowers }
          src={ `${ imagePath  }/flowers.png` }
          alt="flowers"
        />
      </picture>
      <div className={ cn('text', 'text--head') }>
        Дорогие Родные и Близкие!
      </div>
      <div className={ styles.text }>
        Мы будем рады видеть Вас на нашей свадьбе
      </div>
      <div className={ styles.text }>
        <span className={ cn('text--head') } >27&nbsp;мая</span>,
        бутик-отель { ' ' }
        <a
          className={ cn('text--head') }
          target="_blank"
          href="https://seneshal.com"
          rel="noopener noreferrer"
        >
          &laquo;Сенешаль&raquo;
        </a>
      </div>
      <div className={ styles.text }>
        Московская область, г. Солнечногорск, Тимоновское шоссе, стр.&nbsp;3
      </div>
      <div className={ styles.text }>
        Сбор гостей <span className={ cn('text--head') }>в&nbsp;15:00-15:30</span>
      </div>
    </div>
  );
}
