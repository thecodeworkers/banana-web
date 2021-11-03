import { useState, useEffect } from 'react'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'

const questions: any = ['What is your name?', ' What is your email?', ' What is your company, brand or project called?', ' Please describe what it is about', ' How can we help you?']

const Contact = (content) => {

  const [steps] = useState(5)
  const [width, setWidth] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    calculateInitialWidth()
  }, [])

  const result = 100 / steps

  const calculateInitialWidth = () => setWidth(result ?? 0)

  const nextStep = () => {
    if (currentStep < steps) {
      setWidth((width: number) => width + result)
      setCurrentStep((currentStep: number) => ++currentStep)
    }
  }

  return (
    <>
      <div className={styles._main}>
        <div className={styles._titleParent}>
          <h1 className={styles._title}>{content?.content?.title}</h1>
          <hr className={styles._underscore}></hr>
        </div>

        <div className={styles._contentParent}>
          <p className={styles._textOne}>
            {content?.content?.firstSubtitle}
          </p>

          <p className={styles._textTwo}>
            {content?.content?.secondSubtitle}
          </p>

          <p className={styles._question}>{questions[currentStep - 1]}</p>

          <div className={styles._formParent}>
            <div>
              <input type='text' className={styles._input}></input>
            </div>
            <div className={styles._parentBtn}>
              <GeneralButton icon={false} text={content?.content?.button?.text} method={nextStep} />
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
