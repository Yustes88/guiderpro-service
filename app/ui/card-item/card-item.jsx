'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import {useState} from 'react'
import Modal from '../modal/modal'
import Button from '../button/button'

export default function CardItem({card}) {
  const [showDetails, setShowDetails] = useState(false)

  const handleClick = () => {
    setShowDetails(current => !current)
  }

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={card.url} alt="Icon" width={64} height={64} />
      </div>
      <p>{card.name}</p>

      <div className={styles.description}>
        <div>{card.description}</div>
        <Button
          className={`${styles.button} ${showDetails ? 'modal' : ''}`}
          onClick={handleClick}
        >
          Подробнее &#8594;
        </Button>
      </div>

      {showDetails && (
        <Modal card={card} onClose={() => setShowDetails(false)} />
      )}
    </div>
  )
}
