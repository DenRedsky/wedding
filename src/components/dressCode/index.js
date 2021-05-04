import styles from './styles.module.sass';

export default function DressCode() {
  return (
    <div className={ styles.block }>
      <div className={ styles.text }>
        Дресс-код
      </div>
      <div className={ styles.text }>
        Джентльмены: классический костюм или рубашка и&nbsp;брюки чинос
      </div>
      <div className={ styles.text }>
        Дамы: коктейльное платье, будет приятно если&nbsp;Вы поддержите цветовую гамму нашего праздника при выборе наряда
      </div>
    </div>
  );
}
