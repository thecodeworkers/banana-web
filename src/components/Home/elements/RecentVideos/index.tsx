import styles from './styles.module.scss'
import { SlideArrow } from '@components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { RightArrow } from '@icons/svg'
import Image from 'next/image'
import { fallbackRestUrl } from '@utils'

const RecentVideos = ({ content }: any) => {

  const settings: any = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    nextArrow: <SlideArrow direction='right' />,
    prevArrow: <SlideArrow direction='' showLeft={true} />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          centerPadding: '10px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerPadding: '10px'
        }
      }
    ]
  }

  return (
    <div className={styles._main}>
      <div className={styles._topRow}>
        <div className={styles._titleParent}>
          <h1 className={styles._title}>{content?.title}</h1>
          <hr className={styles._underscore}></hr>
        </div>
        <p className={styles._rightText}>Ver más</p>
      </div>

      <div className={styles._carouselParent}>
        <div className={styles._shadow}></div>

        <Slider {...settings}>
          {content?.Videos?.map((item: any, index: number) => {


            return (
              <div key={index}>
                <a href={item?.url} target='_blank' rel='noreferrer'>
                <div className={styles._iframe}
                  style={{ backgroundImage: `url(${fallbackRestUrl}${item?.videoImage?.url})`, backgroundSize: '80% 100%' }}>
                  <div className={styles._videoDescription}>
                    <div className={styles._videoContent}>
                      <p className={styles._text}>{item?.videoDescription}</p>
                      <hr className={styles._line}></hr>
                      <p className={styles._textBold}>{item?.videoAction}</p>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            )
          })
          }
        </Slider>
      </div>

      <div className={styles._seeResponsive}>
        <p>Ver más</p>
        <RightArrow />
      </div>
    </div>
  )
}

export default RecentVideos
