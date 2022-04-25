import Head from 'next/head'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Slider from '../components/Slider/Slider'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pelo Studio Exercice</title>
        <meta name="description" content="Pelo Studio Exercice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <Header></Header>
          <Hero></Hero>
        </div>
        <Slider></Slider>
      </main>

    </div>
  )
}
