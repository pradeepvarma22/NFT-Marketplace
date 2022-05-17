import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Market Place</title>
        <meta name="description" content="NFT Market Place" />
      </Head>

      <main className={styles.main}>
        NFT Market Place
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
