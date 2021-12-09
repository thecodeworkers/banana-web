import styles from './styles.module.scss'
import { IconsButton } from '@components'
import { fallbackRestUrl } from '@utils/path'

const FirstBanner = (content) => {

  const background = `${fallbackRestUrl}${content?.content?.background.url}`
  const responsiveBackground = `${fallbackRestUrl}${content?.content?.backgroundResponsive.url}`

  return (
    <>
      <div className={'_banner'}>
        <div className={styles._container}>
          <div className={styles._bannerContent}>
            <p className={styles._title}>{content?.content?.title}</p>
            <p className={styles._subtitle}>{content?.content?.subtitle}</p>
            <div className={styles._btnSuperParent}>
              <div className={styles._btnParent}>
                <IconsButton text={content?.content?.ButtonAgenda?.text}  right={false} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <style jsx>
        {`
        ._banner{
          background-image: url(${background});
          background-size: cover;
          background-position: center;
          height: 100vh;
          width: 100%;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        @media(max-width: 576px) {
          ._banner{
            background-image: url(${responsiveBackground});
            height: 100vh;
          }
       `}
      </style>
    </>
  )
}

export default FirstBanner
