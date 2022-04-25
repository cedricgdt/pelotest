import styles from './Hero.module.scss'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.container}>

      <div className={styles.hero__background__images}>
        <Image className={styles.image} src="/assets/image1.png" alt='image 1' layout='fill' objectFit='cover' />
        <div className={styles.filter}></div>
      </div>

      <h1 className={styles.hero__title}>Immersive</h1>

      <div className={styles.info__galery__item}>
        <div className={styles.info__item__title}>About</div>
        <div className={styles.info__item__description}>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>
      </div>

      <div className={styles.info__progress__bar}>
        <span className={styles.bar}></span>
        <span className={styles.percentage}></span>
      </div>

    </div>
  )
}

export default Hero;