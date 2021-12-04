import styles from './styles.module.scss'

const SecondBanner = () => {
  return (
    <>
      <div className='_main'>
        <div className={styles._child}>
          <div className={styles._firstSection}>
            <div className={styles._lineParent}>
              <div className={styles._line}></div>
              <p>Purpose & Meaning, Creation & Innovation. </p>
            </div>
          </div>

          <div className={styles._middleSection}>
            <p>Nuestra estrecha relación con la educación, el diseño y la publicidad en Venezuela, nos hizo notar la falta de espacios para promover y resaltar a los creativos del país, tanto a los consolidados como a las futuras generaciones. Es por esta razón que decidimos diseñar, junto a ellos, una agenda cuyo objetivo sea recolectar fondos para becar a estudiantes del Instituto de Diseño de Caracas.</p>

          </div>

          <div className={styles._lastSection}>
            <p>Planeemos el futuro, organicemos nuestros sueños </p>

          </div>
        </div>

      </div>
      <style jsx>{`
        ._main {
          height: 100vh;
          width: 100%;
          background-image: url(/images/banana-background.jpeg);
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </>
  )
}

export default SecondBanner