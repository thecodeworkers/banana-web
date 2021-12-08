import styles from './styles.module.scss'
import Image from 'next/image'
import { GeneralButton, CountProduct } from '@components'
import { fallbackRestUrl } from '@utils/path'

const ThirdBanner = (content) => {
  const back = 'images/grayBanner.png'
  const backResponsive = 'images/grayBannerResponsive.png'

  console.log(content?.content, 'kdkdkk');

  return (
    <>
      <div className={styles._main}>
        <div className={styles._container}>
          <div className={styles._leftSide}>
            <Image src={`${fallbackRestUrl}${content?.content?.productImage.url}`} alt="book" width={675} height={695} quality={100} />
          </div>
          <div className={styles._leftSideResponsive}>
            <Image src={`${fallbackRestUrl}${content?.content?.productImageResponsive.url}`} alt="book" width={232} height={245} quality={100} />
          </div>
          <div className={styles._rightside}>
            <p className={styles._title}>{content?.content?.name}</p>
            <div className={styles._contentText}>
              {content?.content?.features?.map(function (item, index) {
                return (
                  <>
                    <p key={index} className={styles._blackSubtitle}>{item.feature}</p>
                  </>
                )
              })
              }
            </div>
            <p className={styles._subtitle}>{content?.content?.description}</p>

            <div className={styles._buttonsContainer}>
              <div className={styles._counterContainer}>
                <CountProduct stock={10} quantity={10} />
              </div>
              <div className={styles._servicesBtnParent}>
                <GeneralButton background={'#134EBF'} icon={false}
                text={`${content?.content?.buttonCart.text}${content?.content?.price}`}/>
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
