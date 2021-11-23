import styles from './styles.module.scss'
import Image from 'next/image'

const Grid = () => {

  return (
    <div className={styles._main}>
      <div className={styles._filters}>
        <ul className={styles._list}>
          <li> All </li>
          <li> Brand </li>
          <li> Productions </li>
          <li> UI/UX </li>
          <li> Moda </li>
          <li> Mograph </li>
          <li> packaging </li>
        </ul>
      </div>

      <div className={styles._grid}>
        <div className={styles._gridChild}>
          <div className={styles._column}>

            {
              Array.from(Array(6).keys()).map((index) => {
                return (
                  <div className={styles._itemParent} key={index}>
                    <div className={styles._item}>
                      <Image src='/images/portfolio/grid-1.png' alt='image' layout='fill' />
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className={styles._column}>

            {
              Array.from(Array(5).keys()).map((index) => {
                return (
                  <div className={styles._itemParent} key={index}>
                    <div className={styles._item}>
                      <Image src='/images/portfolio/grid-2.png' alt='image' layout='fill' />
                    </div>
                  </div>
                )
              })
            }

          </div>

          <div className={styles._column}>
            {
              Array.from(Array(6).keys()).map((index) => {
                return (
                  <div className={styles._itemParent} key={index}>
                    <div className={styles._item}>
                      <Image src='/images/portfolio/grid-1.png' alt='image' layout='fill' />
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className={styles._column}>
            {
              Array.from(Array(5).keys()).map((index) => {
                return (
                  <div className={styles._itemParent} key={index}>
                    <div className={styles._item}>
                      <Image src='/images/portfolio/grid-2.png' alt='image' layout='fill' />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid
