import { CheckIcon, ErrorIcon } from '../../../public/icons/svg'
import { useSelector } from 'react-redux'

const commonStyle = (color) => `
  background-color: white;
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: -7%;
  width: 18.375rem;
  height: 3.75rem;
  border: solid 2px ${color};
  padding: 0 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1010;
`

const Alert = () => {

  const { intermittence: { alert: { status, color, text, type } } } = useSelector((state: any) => state)

  const returnIcon = () => {
    if (type == 'success') return <CheckIcon />
    if (type == 'error') return <ErrorIcon />
  }

  const returnStyles = () => {
    if (status === 0) return '_static'
    if (status === 1) return '_in'
    if (status === 2) return '_out'
  }

  return (
    <>
      <div className={returnStyles()}>
        <p className='_text'>{text}</p>
        {returnIcon()}
      </div>

      <style>{`
      ._static {
        ${commonStyle(color)}
      }

      ._in {
        ${commonStyle(color)}
        animation: in 0.6s ease forwards;
      }

      ._out {
        ${commonStyle(color)}
        animation: out 0.6s ease-out forwards;
      }

      @keyframes in {
       from { top: -7%; }
       to { top: 7%; }
      }

      @keyframes out {
        from { top: 7%; }
        to { top: -7%; }
       }

      ._text {
        color: ${color};
        font-family: NormalFont, sans-serif;
        font-size: 0.875rem;
      }
    `}
      </style>
    </>
  )
}

export default Alert
