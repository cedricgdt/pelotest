import styles from './Hero.module.scss'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const Hero = () => {

  const [heroId, setHeroId] = useState(0)

  const [heroSlider] = useState([
    {
      title: 'Immersive',
      subTitle: 'About',
      description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      image: '/assets/image1.png'
    },
    {
      title: 'Sensitive',
      subTitle: 'Concept',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium eget augue vel viverra. Nam at rutrum diam. Ut vulputate faucibus arcu eget condimentum.',
      image: '/assets/image2.png'
    }
  ])

  let progress = useRef(null)
  let title = useRef(null)
  let item = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: {ease: 'power4.inOut' }})

    tl
    .to(progress, {
      scaleY: '100%',
      duration: 7,
      ease: 'power0.ease'
    })
    .to([title, item], {
      opacity: 0,
      y: -100,
      duration: 1,
      onComplete: () => {
        setHeroId(() => heroId > heroSlider.length - 1 ? 0 : heroId + 1)
      }
    })
    .to([title, item], {
      delay: 0.5,
      opacity: 1,
      y: 0,
      duration: 1,
    })
    .to(progress, {
      scaleY: '0%',
      duration: 0,
      ease: 'power0.ease'
    })
    .repeat(-1);
  }, [])

  return (
    <div className={styles.container}>

      <div className={styles.hero__background__images}>
        <Image className={styles.image} src={heroSlider[heroId].image} alt='image 1' layout='fill' objectFit='cover' />
        <div className={styles.filter}></div>
      </div>

      <h1 className={styles.hero__title} ref={el => (title = el)}>{ heroSlider[heroId].title }</h1>

      <div className={styles.info__galery__item} ref={el => (item = el)}>
        <div className={styles.info__item__title}>{ heroSlider[heroId].subTitle }</div>
        <div className={styles.info__item__description}>{ heroSlider[heroId].description }</div>
      </div>

      <div className={styles.info__progress__bar}>
        <span className={styles.bar}></span>
        <span className={styles.percentage} ref={el => (progress = el)}></span>
      </div>

    </div>
  )
}

export default Hero;