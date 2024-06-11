import Image from "next/image";
import styles from "./styles.module.css";

export default function CardItem({ card }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={card.url} alt="Icon" width={64} height={64} />
      </div>
      <p>{card.name}</p>

      <div className={styles.description}>
        <div>{card.description}</div>
        <button className={styles.button}>Подробнее →</button>
      </div>
    </div>
  );
}
