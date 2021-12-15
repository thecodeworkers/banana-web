import styles from './styles.module.scss'
import logo from '@icons/logo-white.png'
import Image from 'next/image'
import { GeneralButton } from '@components'
import { navigation } from '@utils'
import { useRouter } from 'next/router'

const SecondBanner = (content: any) => {
  const data: any = content?.content?.branchs
  const router = useRouter()

  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={styles._container}>
          <div className={styles._content}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>{content?.content?.phrase}</p>
            </div>
            <div className={styles._logoContainer}>
              <Image src={logo} alt="logo-icon" width={47} height={41} quality={100} />
            </div>
          </div>

          <div className={styles._buttonContainer}>
            <GeneralButton
              background={'#ffffff'}
              text={content?.content?.sectionButton?.text}
              icon={true}
              iconColor={'#000000'}
              textColor={'#000000'}
              method={() => navigation('/portfolio', router)}
            />
          </div>

          <div className={'_branchsContainer'}>
            {content?.content?.branchs?.map((item, index) => {
              return (
                <div key={index} >
                  <p className={styles._subtitle}>{item.text}</p>
                </div>
              )
            }
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
      ._imageContainer{
        position:absolute;
        right: 125px;
        top: -10px;
        width:302px;
        height:218px
      }
      ._imageContainerResponsive{
       display:none
      }
      ._branchsContainer{
        display: flex;
        justify-content: space-between;
        align-content:center
      }
      @media(max-width: 992px) {
        ._branchsContainer{
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          width: 100%;
        }
      }
      @media(max-width: 887px) {
        ._imageContainer{
          position: absolute;
          left: 0;
          bottom: 0;
          top: 85px;

        }
      }
      @media(max-width: 768px) {
        ._branchsContainer{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
        }
      }
      @media(max-width: 576px) {
        ._branchsContainer{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
        }
        ._imageContainer{
         display:none
        }
        ._imageContainerResponsive{
          display:block;
          position: absolute;
          left: 150px;
          bottom: 0;
        }
      }
      `}</style>
    </>
  )
}

export default SecondBanner
