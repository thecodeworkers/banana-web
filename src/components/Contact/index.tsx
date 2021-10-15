import { useState, useEffect } from 'react'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const Contact = () => {

  const [steps] = useState(10)
  const [width, setWidth] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    calculateInitialWidth()
  }, [])

  const result = 100 / steps

  const calculateInitialWidth = () => setWidth(result ?? 0)

  const nextStep = () => {
    if (width < 100) {
      setWidth((width: number) => width + result)
      setCurrentStep((currentStep: number) => ++currentStep)
    }
  }

  return (
    <>
      <div className={styles._main}>
        <div className={styles._titleParent}>
          <h1 className={styles._title}>Contact</h1>
          <hr className={styles._underscore}></hr>
        </div>

        <div className={styles._contentParent}>
          <p className={styles._textOne}>
            enough about us
          </p>

          <p className={styles._textTwo}>
            this is about you
          </p>

          <div className={styles._formParent}>
            <div>
              <input type='text' className={styles._input}></input>
            </div>
            <div className={styles._parentBtn}>
              <GeneralButton icon={false} text='Siguiente' method={nextStep} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className={styles._stepsNumber}> {currentStep} / {steps} </p>
        <div className={styles._stepper}>
          <div className='_step'></div>
        </div>
      </div>

      <style jsx>{`
        ._step {
          width: ${width}%;
          background-color: #FFB703;
          height: inherit;
          border-radius: 0.4688rem;
        }
      `}</style>
    </>
  )
}

export default Contact
