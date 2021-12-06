import { useState, useEffect } from 'react'
import { parseHour, caracasParseHour } from '@utils'

const Clock = ({ textClass = '_cityText', theme = 'light', font = 'NormalFont' }) => {

  const commonText = (theme = 'dark') => (`
  color: ${theme == 'dark' ? '#FFF' : '#000'};
  font-family: ${font};
  font-size: 0.875rem;
`)

  useEffect(() => {
    const interval: any = setInterval(getCurrentHour, 1000)
    return () => clearInterval(interval)
  }, [])

  const [currentHour, setCurrentHour] = useState(caracasParseHour)

  const getCurrentHour = () => {
    const date = new Date()
    const timeZone = date.toLocaleString('en-US', { timeZone: 'America/Caracas' })
    const caracasDate = new Date(timeZone)
    const parseDate: any = parseHour(caracasDate)
    setCurrentHour(parseDate)
  }

  return (
    <>
      <p className={textClass}> CARACAS {currentHour} </p>
      <style jsx>{`
        ._cityText {
          ${commonText(theme)};
        }

        ._cityTextTrasparent {
          ${commonText(theme)};
          animation: transparentText .3s linear forwards;
        }

        ._cityTextsolid {
          ${commonText(theme)};
          animation: solidText .3s linear forwards;
        }


        @keyframes solidText {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes transparentText {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
          }
        }
    `}</style>
    </>
  )
}

export default Clock
