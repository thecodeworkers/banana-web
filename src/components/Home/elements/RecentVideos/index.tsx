import styles from './styles.module.scss'
import { SlideArrow } from '@components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { RightArrow, Play } from '@icons/svg'
import { fallbackRestUrl } from '@utils'
import { withRouter } from 'next/router'

const RecentVideos = ({ content, router }: any) => {

  const settings: any = {
    infinite: true,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    nextArrow: <SlideArrow direction='right' />,
    prevArrow: <SlideArrow direction='' showLeft={true} />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.1,
          centerPadding: '10px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.1,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
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
        <p className={styles._rightText} onClick={() => router.push('/classroom')}>Ver más</p>
      </div>

      <div className={styles._carouselParent}>
        <div className={styles._shadow}></div>

        <Slider {...settings}>
          {content?.Videos?.map((item: any, index: number) => {
            return (
              <div key={index}>
                <a href={item?.url} target='_blank' rel='noreferrer'>
                  <div className={styles._iframe}
                    style={{ backgroundImage: `url(${fallbackRestUrl}${item?.videoImage?.url})` }}>
                    <div className={styles._videoDescription}>
                      <div className={styles._videoContent}>
                        <div className={styles._videoIcon}>
                          <Play />
                        </div>
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

export default withRouter(RecentVideos)
