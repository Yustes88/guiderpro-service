import {cardsData} from '../../data/cards'
import CardItem from '../card-item/card-item'
import styles from './styles.module.css'

export default function CardsList() {
  return (
    <div className={styles.container}>
      {cardsData.map(card => {
        return <CardItem key={card.id} card={card} />
      })}
    </div>
  )
}
