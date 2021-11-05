import styles from './styles.module.scss'
import { SlideArrow } from '@components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { RightArrow } from '@icons/svg'

const RecentVideos = (content) => {

  const settings: any = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    nextArrow: <SlideArrow direction='right' />,
    prevArrow: <SlideArrow direction='' showLeft={false} />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          centerPadding: '15px',
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
          <h1 className={styles._title}>{content?.content?.title}</h1>
          <hr className={styles._underscore}></hr>
        </div>
        <p className={styles._rightText}>Ver más</p>
      </div>

      <div className={styles._carouselParent}>
        <div className={styles._shadow}></div>

        <Slider {...settings}>
          {content?.content?.Videos.map((item, index) => {
            return (
              <div key={index}>
                <iframe className={styles._iframe}
                  src={item?.url} >
                </iframe>
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
