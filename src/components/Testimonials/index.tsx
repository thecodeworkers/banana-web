import React, { FC, useEffect, useState, useRef } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import mantalon from '../../../public/mantalon.png'
import mantalonResponsive from '../../../public/Mantalon-responsive.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GeneralButton, SlideArrow } from '@components'

const Testimonials = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlideArrow direction={'right'} />,
    prevArrow: <SlideArrow direction={''} />,
  }

  return (
    <>
    <div className={styles._bannerContainer}>
      <Slider {...settings}>
        <div className={styles._container}>
        <div className={`_imageContainer`}>
            <Image src={mantalon} alt="mantalon" width={500} height={400} quality={100} />
          </div>
          <div className={`_imageContainerResponsive`}>
            <Image src={mantalonResponsive} alt="mantalon-responsive" width={323} height={386} quality={100} />
          </div>

          <div className={styles._testimonialContainer}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>Mantalon</p>
              <p className={styles._subtitle}>2021 / Fashion</p>
            </div>

            <p className={styles._title}>“We connect the dots to drive cultural relevance everywhere people connect”</p>
            <hr className={styles._line}></hr>
          </div>

          <div className={styles._buttonContainer}>
            <GeneralButton text={'See Portfolio'} icon={true} />
          </div>

        </div>
        <div className={styles._container}>
          <div className={`_imageContainer`}>
            <Image src={mantalon} alt="mantalon" width={500} height={400} quality={100} />
          </div>
          <div className={`_imageContainerResponsive`}>
            <Image src={mantalonResponsive} alt="mantalon-responsive" width={500} height={400} quality={100} />
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
    <style jsx>
      {`
       ._imageContainer{
        width: 100%;
        display:flex
      }
      ._imageContainerResponsive{
        display:none

      }
      @media(max-width: 576px) {
        ._imageContainer{
          display:none
        }

        ._imageContainerResponsive{
          display:flex;
          width: 100%;
        }
      }
      `}
    </style>
    </>
  )
}

export default Testimonials


