import styles from './styles.module.scss'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import rightArrow from '@icons/right-arrow.png'
import { SlideArrow } from '@components'

const RecentVideos = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    nextArrow: <SlideArrow direction='right' />,
    prevArrow: <SlideArrow direction='' showLeft={false} />
  };

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
            <iframe width="360" height="212"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
            <iframe width="360" height="212"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
            <iframe width="360" height="212"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
            <iframe width="360" height="212"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
            <iframe width="360" height="212"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
            <iframe width="360" height="212"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default RecentVideos
