import styles from './page.module.css'
import NavBar from './components/navbar'
import Link from 'next/link'

export default function page() {
  return (
    <div className={styles.body}>
      <NavBar/>
      <div className={styles.textArea}>
        <div className={styles.header}>
          <h1 className={styles.h1}>Discover, Explore, and Watch Your Next Movie!</h1>
        </div>
        <div className={styles.subHeader}>
          Dive into a World of Movies and Enjoy Films for Every Mood!
        </div>
        <Link href={"/movies"}>
          <button className={styles.exploreButton}>Explore Now</button>
        </Link>
      </div>
    </div>
  )
}
