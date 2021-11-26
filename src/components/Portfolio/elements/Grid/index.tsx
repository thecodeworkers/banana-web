import { useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { DownArrow } from '@icons/svg'

const filters: Array<string> = ['All', 'Brand', 'Productions', 'UI/UX', 'Moda', 'Mograph', 'Packaging']

const Grid = () => {

  const [showFilters, setShowFilters] = useState(false)
  const showHideFilters = () => setShowFilters(showFilters => !showFilters)

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
          <li> Packaging </li>
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

      <div className={styles._responsiveGridParent}>
        <div className={styles._filtersBtn} onClick={showHideFilters}>
          <p>filters</p>
          <div className={showFilters ? styles._arrowParentTop : styles._arrowParent}>
            <DownArrow />
          </div>
        </div>

        {
          showFilters && (
            <div className={styles._phoneFilters}>
              <ul className={styles._phoneList}>
                {
                  filters.slice(0, 4).map((item, index) => {
                    return <li key={index}>{item}</li>
                  })
                }
              </ul>

              <ul className={styles._phoneList}>
                {
                  filters.slice(4, 8).map((item, index) => {
                    return <li key={index}>{item}</li>
                  })
                }
              </ul>
            </div>
          )
        }

        <div className={styles._responsiveGrid}>
          {
            Array.from(Array(5).keys()).map((index) => {
              return (
                <div
                  className={styles._picture}
                  key={index}
                  style={{ backgroundImage: `${index % 2 === 0 ? 'url(/images/portfolio/grid-2.png)' : 'url(/images/portfolio/grid-1.png)'}` }}>
                </div>
              )
            })
          }
        </div>

        <div className={styles._paginationParent}>
          <div className={styles._square}>
            1
          </div>

          <div className={styles._square}>
            2
          </div>
        </div>
      </div>

    </div>
  )
}

export default Grid


