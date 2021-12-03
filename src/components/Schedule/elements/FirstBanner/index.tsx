import styles from './styles.module.scss'
import Image from 'next/image'
import background from 'public/images/bannerHeader.png'

const FirstBanner = (content) => {

  return (
    <>
      <div className={'_banner'}>
      <p>hola</p>
      </div>
      <style jsx>
        {`
        ._banner{
          background-image: require(${background});
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
