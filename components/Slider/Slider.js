import styles from './Slider.module.scss'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Slider = () => {

  const [sliderId, setSliderId] = useState(0)

  let icon = useRef(null)
  let title = useRef(null)
  let description = useRef(null)

  useEffect(() => {
    console.log(sliderId)
  }, [])

  function previousSlider() {
    console.log("previous")
  }

  function nextSlider() {
    console.log("next")
  }

  return (
    <div className={styles.container}>

      <div className={styles.card}>
        <div className={styles.card__icon}>
          <Image src="/assets/eye.svg" alt='an eye' width="72" height="72" />
        </div>
        <div className={styles.card__title}>Discover an experience</div>
        <div className={styles.card__description}>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</div>
      </div>

      <div className={styles.arrows}>
        <button className={styles.arrow__left} onClick={previousSlider}>
          <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 1L2 26M2 26L27 51M2 26H64" stroke="#C3C7D4" strokeWidth="2"/>
          </svg>
        </button>  
        <button className={styles.arrow__right} onClick={nextSlider}>
          <svg width="64" height="52" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 1L2 26M2 26L27 51M2 26H64" stroke="#C3C7D4" strokeWidth="2"/>
          </svg>
        </button>  
      </div>

    </div>
  )
}

export default Slider;