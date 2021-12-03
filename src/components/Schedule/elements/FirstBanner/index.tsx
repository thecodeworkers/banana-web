import styles from './styles.module.scss'
import Image from 'next/image'
import back from '../../../../../public/icons/bannerHeader.png'

const FirstBanner = (content) => {

  return (
    <>
      <div className={'_banner'}>

      <p>Agenda una beca</p>
      </div>
      <style jsx>
        {`
        ._banner{
          background-image: url(${back});
          background-size: cover;
          background-position: center;
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          background-repeat: no-repeat;
        }
       `}
      </style>
    </>
  )
}

export default FirstBanner
