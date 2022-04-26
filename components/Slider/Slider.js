import styles from './Slider.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'

const Slider = () => {

  const [sliderId, setSliderId] = useState(0)
  const [allowClick, setAllowClick] = useState(false)
  const [sliderList] = useState([
    {
      title: 'Discover an experience',
      description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      icon: 'eye.svg'
    },
    {
      title: 'Explore new worlds',
      description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      icon: 'Planet.svg'
    },
    {
      title: 'Follow great stories',
      description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      icon: 'BookOpen.svg'
    }
  ])

  let icon = useRef(null)
  let title = useRef(null)
  let description = useRef(null)

  function sliderAnimation(id) {
    const tl = gsap.timeline({ defaults: {ease: 'power4.inOut'}})

    tl.to([icon, title, description], {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: 'power4.inOut',
      stagger: 0.2,
      onComplete: () => {
        setSliderId(id)
      }
    }).to([description, title, icon], {
      delay: 0.5,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.inOut',
      stagger: 0.2,
      onComplete: () => {
        setAllowClick(false)
      }
    })
  }

  function previousSlider() {
    setAllowClick(true)
    let id
    if (sliderId === 0) {
      id = sliderList.length - 1
    } else {
      id = sliderId - 1
    }
    sliderAnimation(id)
  }

  function nextSlider() {
    setAllowClick(true)
    let id
    if (sliderId === sliderList.length - 1) {
      id = 0
    } else {
      id = sliderId + 1
    }
    sliderAnimation(id)
  }

  return (
    <div className={styles.container}>

      <div className={styles.card}>
        <div ref={el => (icon = el)} className={styles.card__icon}>
          <Image src={`/assets/${sliderList[sliderId].icon}`} alt='an eye' width="42" height="42" />
        </div>
        <div ref={el => (title = el)} className={styles.card__title}>{ sliderList[sliderId].title }</div>
        <div ref={el => (description = el)} className={styles.card__description}>{ sliderList[sliderId].description }</div>
      </div>

      <div className={styles.arrows}>
        <button disabled={allowClick} className={styles.arrow__left} onClick={previousSlider}>
          <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 1L2 26M2 26L27 51M2 26H64" stroke="#C3C7D4" strokeWidth="2"/>
          </svg>
        </button>  
        <button disabled={allowClick} className={styles.arrow__right} onClick={nextSlider}>
          <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 1L2 26M2 26L27 51M2 26H64" stroke="#C3C7D4" strokeWidth="2"/>
          </svg>
        </button>  
      </div>

    </div>
  )
}

export default Slider;