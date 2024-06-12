'use client'
import styles from './styles.module.css'
import {useGetPostByIdQuery} from '../../lib/apiSlice'
import Button from '../button/button'

export default function Modal({card, onClose}) {
  const {data: post, isLoading, isError} = useGetPostByIdQuery(card.id)

  if (isError) {
    return <div>Error fetching posts</div>
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{isLoading ? 'Loading...' : post.title}</h2>
        <h3>{isLoading ? '' : post.id}</h3>
        <p>{isLoading ? '' : post.body}</p>
        <Button className={`${styles.button}`} onClick={onClose}>
          Вернуться обратно &#8594;
        </Button>
      </div>
    </div>
  )
}
