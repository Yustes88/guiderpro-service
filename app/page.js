import styles from "./page.module.css";
import CardsList from "./ui/cards-list/cards-list";
import Title from "./ui/title/title";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <Title />
        <CardsList />
      </section>
    </main>
  );
}
