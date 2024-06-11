import { cardsData } from "@/app/data/cards";
import CardItem from "../card-item/card-item";
import styles from "./styles.module.css";

export default function CardsList() {
  console.log(cardsData);
  return (
    <div className={styles.container}>
      {cardsData.map((card) => {
        return <CardItem key={card.id} card={card} />;
      })}
    </div>
  );
}
