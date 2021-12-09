import { useState, useEffect } from 'react'
import { DownArrow } from '@icons/svg'
import styles from './styles.module.scss'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { fallbackRestUrl } from '@utils'

const filters: Array<string> = ['All', 'Brand', 'Productions', 'UI/UX', 'Moda', 'Mograph', 'Packaging']

const Grid = () => {
  const [showFilters, setShowFilters] = useState(false)
  const showHideFilters = () => setShowFilters(showFilters => !showFilters)
  const { project: { projects } } = useSelector((state: any) => state)
  const [tmpAllProjects, setTmpAllProjects] = useState(projects)
  const [processedArray, setProcededArray] = useState([])

  useEffect(() => {
    const columns = 4
    let elementPerColumn = tmpAllProjects.length / columns
    elementPerColumn = elementPerColumn < 1 ? 1 : elementPerColumn

    const localProjects = []
    let fromIndex = 0

    const ceilNumber = (num: number) => Math.ceil(num)

    const determinateElementPerColumn = (index: number, elementPerColumn: number) => {
      const decimal = elementPerColumn.toString().split('.')[1]

      if (decimal) {
        if (decimal == '25' && index == 0) return ceilNumber(elementPerColumn)
        if (decimal == '5' && (index == 0 || index == 1)) return ceilNumber(elementPerColumn)
        if (decimal == '75' && (index == 0 || index == 1 || index == 2)) return ceilNumber(elementPerColumn)
      }

      return Math.floor(elementPerColumn)
    }

    for (let i = 0; i < columns; i++) {
      const toIndex = fromIndex + determinateElementPerColumn(i, elementPerColumn)
      localProjects.push(tmpAllProjects.slice(fromIndex, toIndex))
      fromIndex = toIndex
    }

    setProcededArray(localProjects)
  }, [tmpAllProjects])

  const filterBy = (criteria) => {
    if (criteria === 'All') return setTmpAllProjects(projects)
    const result = projects.filter((item) => item?.categories?.name === criteria)
    if (result) setTmpAllProjects(result)
  }

  return (
    <div className={styles._main}>
      <div className={styles._filters}>
        <ul className={styles._list}>
          <li onClick={() => filterBy('All')} > All </li>
          <li onClick={() => filterBy('Branding')} > Brand </li>
          <li onClick={() => filterBy('Productions')}> Productions </li>
          <li onClick={() => filterBy('UI/UX')}> UI/UX </li>
          <li onClick={() => filterBy('Moda')}> Moda </li>
          <li onClick={() => filterBy('Moda')}> Mograph </li>
          <li onClick={() => filterBy('Moda')}> Packaging </li>
        </ul>
      </div>


      <div className={styles._grid}>
        <div className={styles._gridChild}>
          {
            processedArray.map((project, index) => (
              <div key={index} className={styles._column}>
                {
                  project.map((p, index) => (
                    <div key={index} className={styles._itemParent}>
                      <div className={styles._item}>
                        <Image
                          src={`${fallbackRestUrl}${p?.portrait?.image?.url}`}
                          blurDataURL={`${fallbackRestUrl}${p?.portrait?.image?.url}`}
                          alt={p?.portrait?.image?.name}
                          layout='fill'
                          quality={100}
                          placeholder="blur" />
                        <div className={styles._description}>
                          <p>{p?.name}</p>
                        </div>

                        <div className={styles._logo}>
                          <Image src={`${fallbackRestUrl}${p?.logoHover?.image?.url}`} alt={p?.portrait?.image?.name} width='80%' height='30%' />
                        </div>
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
                  style={{ backgroundImage: `url(${fallbackRestUrl}${p?.portrait?.imageResponsive?.url})` }}>
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
