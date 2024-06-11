import styles from "./styles.module.css";

export default function Modal({ card, onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>{card.name}</h2>
        <p>{card.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
