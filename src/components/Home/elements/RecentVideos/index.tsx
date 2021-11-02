import styles from './styles.module.scss'
import { SlideArrow } from '@components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { RightArrow } from '@icons/svg'

const RecentVideos = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    nextArrow: <SlideArrow direction='right' />,
    prevArrow: <SlideArrow direction='' showLeft={false} />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: '5px'
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
          <h1 className={styles._title}>Recent videos</h1>
          <hr className={styles._underscore}></hr>
        </div>
        <p className={styles._rightText}>Ver más</p>
      </div>

      <div className={styles._carouselParent}>
        <div className={styles._shadow}></div>

        <Slider {...settings}>
          <div>
            <iframe className={styles._iframe}
              src='https://www.youtube-nocookie.com/embed/GLc-5RZGQvY' >
            </iframe>
          </div>
          <div>
            <iframe className={styles._iframe}
              src='https://www.youtube-nocookie.com/embed/IfcDV_0j4HA' >
            </iframe>
          </div>
          <div>
            <iframe className={styles._iframe}
              src='https://www.youtube-nocookie.com/embed/VG76C_tkxKA' >
            </iframe>
          </div>
          <div>
            <iframe className={styles._iframe}
              src='https://www.youtube-nocookie.com/embed/gsoC5L7D0y4' >
            </iframe>
          </div>
          <div>
            <iframe className={styles._iframe}
              src='https://www.youtube-nocookie.com/embed/JoLBEp7Lr3Q' >
            </iframe>
          </div>
          <div>
            <iframe className={styles._iframe}
              src='https://www.youtube-nocookie.com/embed/42y0EFZ37Pc' >
            </iframe>
          </div>
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
