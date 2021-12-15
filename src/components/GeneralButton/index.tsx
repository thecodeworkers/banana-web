import styles from './styles.module.scss'
import { RightArrow } from '@icons/svg'

const GeneralButton = ({
  height = '3.8rem',
  background = '#000',
  textColor = '#FFF',
  icon = true,
  animation = true,
  text = '',
  method = null,
  iconColor = '#FFF',
  borderColor = '',
  padding = '1.8rem',
  type = 'button'
}: any) => {
  return (
    <>
      <button className='_btn' onClick={method ? method : () => { }} type={type}>
        <p className={styles._text}>{text}</p>
        {
          icon && (
            <div className='_iconParent'>
              <RightArrow color={iconColor} />
            </div>
          )
        }
      </button>

      <style jsx>{`
        ._btn {
          width: 100%;
          height: ${height};
          background-color: ${background};
          border: solid 1px ${borderColor};
          box-sizing: border-box;
          color: ${textColor};
          padding: ${padding};
          display: flex;
          justify-content: ${icon ? 'space-between' : 'center'};
          align-items: center;
          white-space: nowrap;
          cursor: pointer;
        }

        ${animation && `
        ._btn:hover ._iconParent {
          animation: slidein linear 0.6s;
        }

        @keyframes slidein {
          0% { transform: translateX(0px) }
          50% { transform: translateX(0.375rem) }
          100% { transform: translateX(0px) }
        }`}

        ._iconParent {
          diplay:block;
        }

      `}
      </style>
    </>
  )
}

export default GeneralButton
