import { useState } from 'react'
import { DownArrow } from '@icons/svg'
import styles from './styles.module.scss'
import Image from 'next/image'

const filters: Array<string> = ['All', 'Brand', 'Productions', 'UI/UX', 'Moda', 'Mograph', 'Packaging']

const tmpAllProjects = [
  {
    img: '/images/portfolio/grid-1.png',
    name: 'test1'
  },
  {
    img: '/images/portfolio/grid-2.png',
    name: 'test2'
  },
  {
    img: '/images/portfolio/grid-1.png',
    name: 'test3'
  },
  {
    img: '/images/portfolio/grid-2.png',
    name: 'test4'
  },
  {
    img: '/images/portfolio/grid-1.png',
    name: 'test5'
  },
  {
    img: '/images/portfolio/grid-1.png',
    name: 'test6'
  },
  {
    img: '/images/portfolio/grid-2.png',
    name: 'test7'
  },
  {
    img: '/images/portfolio/grid-2.png',
    name: 'test8'
  },
]

const columns = 4
let elementPerColum = tmpAllProjects.length / columns
elementPerColum = elementPerColum < 1 ? 1 : elementPerColum

const projects = []
let fromIndex = 0

const ceilNumber = (num: number) => Math.ceil(num)

const determinateElementPerColum = (index: number, elementPerColum: number) => {
  const decimal = elementPerColum.toString().split('.')[1]

  if (decimal) {
    if (decimal == '25' && index == 0) return ceilNumber(elementPerColum)
    if (decimal == '5' && (index == 0 || index == 1)) return ceilNumber(elementPerColum)
    if (decimal == '75' && (index == 0 || index == 1 || index == 2)) return ceilNumber(elementPerColum)
  }

  return Math.floor(elementPerColum)
}


for (let i = 0; i < columns; i++) {
  const toIndex = fromIndex + determinateElementPerColum(i, elementPerColum)

  projects.push(tmpAllProjects.slice(fromIndex, toIndex))
  fromIndex = toIndex
}

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
          {
            projects.map((project, index) => (
              <div key={index} className={styles._column}>
                {
                  project.map((p, index) => (
                    <div key={index} className={styles._itemParent}>
                      <div className={styles._item}>
                        <Image src={p.img} alt={p.name} layout='fill' />
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          }
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
            tmpAllProjects.map((p, index) => {
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
