import styles from './styles.module.scss'
import Image from 'next/image'
import { GeneralButton, CountProduct } from '@components'

const ThirdBanner = (content) => {
  const back = 'images/grayBanner.png'
  const backResponsive = 'images/grayBannerResponsive.png'

  return (
    <>
      <div className={styles._main}>
        <div className={styles._container}>
          <div className={styles._leftSide}>
            <Image src='/images/book.png' alt="book" width={675} height={695} quality={100} />
          </div>
          <div className={styles._leftSideResponsive}>
            <Image src='/images/bookResponsive.png' alt="book" width={232} height={245} quality={100} />
          </div>
          <div className={styles._rightside}>
            <p className={styles._title}>Agenda 2022</p>
            <div className={styles._contentText}>
              <p className={styles._blackSubtitle}>Media Carta</p>
              <p className={styles._blackSubtitle}>150 páginas</p>
              <p className={styles._blackSubtitle}>12 artistas </p>
              <p className={styles._blackSubtitle}>Página de stickers</p>
            </div>
            <p className={styles._subtitle}>
              Como primer paso para construir nuestro ecosistema
              y apostar por el encuentro entre creativos y artistas
              venezolanos, planteamos diseñar una agenda que parta
              de la premisa de que lo que recolectemos sea
              destinado a becar y apoyar a un estudiante.</p>

            <div className={styles._buttonsContainer}>
              <div className={styles._counterContainer}>
                <CountProduct stock={10} quantity={10} />
              </div>
              <div className={styles._servicesBtnParent}>
                <GeneralButton background={'#134EBF'} icon={false} text={'Agregar al carrito 20$'} />
              </div>
            </div>
          </div>

        </div>
        <div className={'_banner'}>
          <p className={styles._bigTitle}>Agenda 2022.</p>
            <div className={styles._lineParent}>
              <div className={styles._line}></div>
              <div className={styles._lineContainer}>
              <span>Propósito</span>
              <p>Más que una agencia, somos un ecosistema de creativos que fomenta la innovación, la investigación y el trabajo duro, por lo que es nuestra responsabilidad brindar espacios y oportunidades a las futuras generaciones </p>
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
          min-height: 40vh;
          width: 100%;
          background-repeat: no-repeat;
        }
        @media(max-width: 576px) {
          ._banner{
            background-image: url(${backResponsive});
            height: 70vh;
          }
       `}
      </style>
    </>
  )
}

export default ThirdBanner
