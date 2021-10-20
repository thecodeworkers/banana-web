import styles from './styles.module.scss'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const RecentVideos = () => {

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", marginRight: 40 }}
        onClick={onClick}
      />
    );
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue", marginLeft: 40, zIndex: 999, opacity: 0 }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className={styles._main}>
      <div className={styles._titleParent}>
        <h1 className={styles._title}>Recent videos</h1>
        <hr className={styles._underscore}></hr>
      </div>

      <div className={styles._carouselParent}>
        <Slider {...settings}>
          <div>
            <iframe width="420" height="315"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
          <iframe width="420" height="315"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
          <iframe width="420" height="315"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
          <iframe width="420" height="315"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
          <iframe width="420" height="315"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
          <div>
          <iframe width="420" height="315"
              src="https://www.youtube-nocookie.com/embed/4u856utdR94" >
            </iframe>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default RecentVideos
