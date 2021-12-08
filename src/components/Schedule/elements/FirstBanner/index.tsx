import styles from './styles.module.scss'
import { IconsButton } from '@components'

const FirstBanner = (content) => {
  const back = 'images/bannerHeader.png'
  const responsiveBack = 'images/bannerHeaderResponsive.png'
  return (
    <>
      <div className={'_banner'}>
        <div className={styles._container}>
          <div className={styles._bannerContent}>
            <p className={styles._title}>Agenda una beca</p>
            <p className={styles._subtitle}>No hay límites para seguir creando, creciendo y conectando</p>
            <div className={styles._btnSuperParent}>
              <div className={styles._btnParent}>
                <IconsButton text={'Comprar'} icon='star' right={false} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <style jsx>
        {`
        ._banner{
          background-image: url(${back});
          background-size: cover;
          background-position: center;
          height: 100vh;
          width: 100%;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        @media(max-width: 576px) {
          ._banner{
            background-image: url(${responsiveBack});
            height: 100vh;
          }
       `}
      </style>
    </>
  )
}

export default FirstBanner
