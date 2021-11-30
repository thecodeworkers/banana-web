import styles from './styles.module.scss'

const DostLine = ({ number = 3 }) => (
  <>
    <div className={styles._line}>
      {
        number == 3 ? (
          <>
            <div className={styles._dot}></div>
            <div className={styles._dotTwo}></div>
            <div className={styles._dotThree}></div>
          </>
        ) : <div className={styles._dotThree}></div>
      }
    </div>
  </>
)

export default DostLine
