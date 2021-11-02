import styles from './styles.module.scss'
import { branchData } from './data'
import logo from '@icons/logo-white.png'
import haloWeb from '@icons/Halo.png'
import haloResponsive from '@icons/HaloResponsive.png'
import Image from 'next/image'
import { GeneralButton } from '@components'

const SecondBanner = () => {
  const data: any = branchData

  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={styles._container}>
          <div className={styles._content}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>Planting ideas, </p>
              <div style={{ position: 'relative' }}>
                <p className={styles._title}>harvesting realities</p>
                {/* <b className={'_imageContainer'}>
                  <Image src={haloWeb} alt="haloWEB" width={341} height={178} quality={100} />
                 </b> */}
                {/* <b className={'_imageContainerResponsive'}>
                  <Image src={haloResponsive} alt="haloResponsive" width={116} height={78} quality={100} />
                 </b> */}
              </div>
            </div>
            <div className={styles._logoContainer}>
              <Image src={logo} alt="logo-icon" width={47} height={41} quality={100} />
            </div>
          </div>

          <div className={styles._buttonContainer}>

            <GeneralButton background={'#ffffff'} text={'See Portfolio'}
              icon={true} iconColor={'#000000'} textColor={'#000000'} />

          </div>

          <div className={'_branchsContainer'}>
            {data.branch.map((item, index) => {
              return (
                <div key={index}>
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
        display: grid;
        grid-template-columns: repeat(${data.branch.length}, 1fr);
        width: 100%;
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
