import { robotoCondensed } from "../fonts";
import styles from "./styles.module.css";

export default function Title() {
  return (
    <div className={styles.container}>
      <h1 className={`${robotoCondensed.className} ${styles.title}`}>Сервис</h1>
      <div>
        <p className={styles.description}>
          От идеи до незабываемого и измеримого результата.
        </p>
        <hr className={styles.divider} />
        <p className={styles.subtitle}>
          Интеграция безупречного производства, передовых технологий и
          тщательного измерения производительности
        </p>
      </div>
    </div>
  );
}
