import styles from './styles.module.sass';

export default function DateAndPlace() {
  return (
    <div className={ styles.block }>
      <div className={ styles.text }>
        Дорогие Родные и Близкие!
      </div>
      <div className={ styles.text }>
        Мы будем рады видеть Вас на нашей свадьбе
      </div>
      <div className={ styles.text }>
        27&nbsp;мая, бутик-отель <a target="_blank" href="https://seneshal.com">&laquo;Сенешаль&raquo;</a>
      </div>
      <div className={ styles.text }>
        Московская область, г. Солнечногорск, Тимоновское шоссе, стр.&nbsp;3
      </div>
      <div className={ styles.text }>
        Сбор гостей в&nbsp;15:00-15:30
      </div>
    </div>
  );
}
