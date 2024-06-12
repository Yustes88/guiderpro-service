'use client'
import styles from './styles.module.css'
import {useGetPostByIdQuery} from '../../lib/apiSlice'

export default function Modal({card, onClose}) {
  const {data: post, isLoading, isError} = useGetPostByIdQuery(card.id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching posts</div>
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{post.title}</h2>
        <h3>{post.id}</h3>
        <p>{post.body}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
