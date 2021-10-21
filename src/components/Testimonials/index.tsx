import React, { FC, useEffect, useState, useRef } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import mantalon from '../../../public/mantalon.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GeneralButton, SlideArrow } from '@components'

const Testimonials = () => {

  const settings = {
    infinite: true,
    speed: 500,
    // slidesToShow: 1.07,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlideArrow direction={'right'} />,
    prevArrow: <SlideArrow direction={''} />,
  }

  return (
    <div className={styles._bannerContainer}>
      <Slider {...settings}>
        <div className={styles._container}>
          <div className={styles._imageContainer}>
            <Image src={mantalon} alt="mantalon" width={500} height={400} quality={100} />
          </div>

          <div className={styles._testimonialContainer}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>Mantalon</p>
              <p className={styles._subtitle}>2021 / Fashion</p>
            </div>

            <p className={styles._title}>“We connect the dots to drive cultural relevance everywhere people connect”</p>
            <hr className={styles._line}></hr>
            <p className={styles._subtitle}>2021 / Fashion</p>
          </div>

          <div className={styles._buttonContainer}>
            <GeneralButton text={'See Portfolio'} icon={true} />
          </div>

        </div>
        <div className={styles._container}>
          <div className={styles._imageContainer}>
            <Image src={mantalon} alt="mantalon" width={500} height={400} quality={100} />
          </div>

          <div className={styles._testimonialContainer}>
            <p className={styles._title}>Mantalon</p>
            <p className={styles._subtitle}>2021 / Fashion</p>
            <p className={styles._title}>“We connect the dots to drive cultural relevance everywhere people connect”</p>
            <hr className={styles._line}></hr>
            <p className={styles._subtitle}>2021 / Fashion</p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Testimonials


