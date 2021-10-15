import styles from './styles.module.scss'
import { Halo } from '@icons/resource'
import { branchData } from './data'
import logo from '@icons/logo-white.png'
import Image from 'next/image'

const SecondBanner = () => {
  const data: any = branchData


  return (
    <>
      <div className={styles._bannerContainer}>
        <div className={styles._container}>
          <div className={styles._content}>
            <div className={styles._titleContainer}>
              <p className={styles._title}>Planting ideas, </p>
              <p className={styles._title}>harvesting realities
                <b className={'_imageContainer'}><Halo /></b> </p>
            </div>
            <div className={styles._logoContainer}>
              <Image src={logo} alt="logo-icon" width={47} height={41} quality={100} />
            </div>
          </div>

          <div>
            <button type={'button'}>See Portfolio </button>
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
        position: absolute;
        left: 470px;
        top: -50px;
        width:302px;
        height:218px
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
          top: 60px;

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
          position: absolute;
          left: 0;
          bottom: 0;
          top: 20px;
        }
      }
      `}</style>
    </>
  )
}

export default SecondBanner
