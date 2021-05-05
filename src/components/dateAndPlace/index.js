import classnames from 'classnames/bind';

import styles from './styles.module.sass';

const cn = classnames.bind(styles);

export default function DateAndPlace() {
  return (
    <div className={ styles.block }>
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
          href="https://seneshal.com">
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
