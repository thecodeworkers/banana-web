import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GeneralButton, SlideArrow } from '@components'
import { fallbackRestUrl } from '../../../../utils/path'
import { withRouter } from 'next/router'

const Testimonials = ({ content, router }) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlideArrow direction={'right'} />,
    prevArrow: <SlideArrow direction={''} />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10px'

        }
      }
    ]
  }

  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={styles._buttonContainer} onClick={() => router.push('/portfolio')}>
          <GeneralButton text={content?.button?.text} icon={true} borderColor='#000' />
        </div>
        <Slider {...settings}>
          {content?.TesmimonialData?.map((item, index) => {
            return (
              <div className={styles._container} key={index}>
                <div className={'_imageContainer'}>
                  <Image src={`${fallbackRestUrl}${item?.image?.url}`} alt={item?.image?.name} width={619} height={509} quality={100} />
                </div>
                <div className={'_imageContainerResponsive'}>
                  <Image src={`${fallbackRestUrl}${item?.responsiveImage?.url}`} alt={item?.responsiveImage?.name} width={323} height={206} quality={100} />
                </div>

                <div className={styles._testimonialContainer}>
                  <div className={styles._titleContainer}>
                    <p className={styles._title}>{item?.title}</p>
                    <p className={styles._subtitle}>{item?.date}</p>
                  </div>

                  <p className={styles._bigTitle}>{item?.testimony}</p>
                  <hr className={styles._line}></hr>
                </div>
              </div>
            )
          })
          }
        </Slider>

        <div className={styles._buttonContainerResponsive} onClick={() => router.push('/portfolio')}>
          <GeneralButton borderColor={'#000'} text={content?.button?.text} icon={true} />
        </div>
      </div>
      <style jsx>
        {`
       ._imageContainer{
        display:flex;
        height:100%
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

export default withRouter(Testimonials)


