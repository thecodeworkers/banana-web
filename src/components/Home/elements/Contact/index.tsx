import { useState, useEffect } from 'react'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setContactForm, sendContactData } from '@store/actions'

const Contact = ({ content }: any) => {

  const dispatch = useDispatch()
  const { contact } = useSelector((state: any) => state)
  const localData = content ?? {}
  const contactData = content?.contactForm ?? []

  const [steps] = useState(content?.contactForm.lenght ?? 5)
  const [width, setWidth] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  const result = 100 / steps

  useEffect(() => {
    calculateInitialWidth()
  }, [])

  const calculateInitialWidth = () => setWidth(result ?? 0)

  const nextStep = () => {
    const prevState = contact?.contactData
    const key = contactData[currentStep - 1]?.input.placeholder

    dispatch(setContactForm({ contactData: { ...prevState, [key]: inputValue } }))

    if (currentStep < steps) {
      setWidth((width: number) => width + result)
      setCurrentStep((currentStep: number) => ++currentStep)
      setInputValue('')
      return
    }

    const data = { ...prevState, [key]: inputValue }
    dispatch(sendContactData(data))
  }

  const inputHandler = (element: any) => {
    const { target: { value } } = element
    let regex = contactData[currentStep - 1]?.input.regex

    if (regex) {
      const newregex: any = new RegExp(regex)
      const isValid = newregex.test(value)
      setIsValid(isValid)
    }

    if (!regex && value.length) setIsValid(true)
    setInputValue(value)
  }

  return (
    <>
      <div className={styles._main}>
        <div className={styles._titleParent}>
          <div className={styles._titleChild}>
            <h1 className={styles._title}>{localData?.title}</h1>
            <hr className={styles._underscore}></hr>
          </div>
        </div>

        {
          true &&
          <div className={styles._contentParent}>
            <p className={styles._textOne}>
              {localData?.firstSubtitle}
            </p>

            <p className={styles._textTwo}>
              {localData?.secondSubtitle}
            </p>

            <p className={styles._question}>{contactData[currentStep - 1]?.Question}</p>

            <div className={styles._formParent}>
              <div>
                <input
                  type={contactData[currentStep - 1]?.input.Type}
                  placeholder={contactData[currentStep - 1]?.input.name}
                  className={styles._input}
                  value={inputValue}
                  onChange={inputHandler}
                >
                </input>
              </div>
              <div className={styles._parentBtn}>
                <GeneralButton
                  icon={false}
                  text={localData?.button?.text}
                  method={isValid && inputValue.length ? nextStep : () => alert('ERROR!')} />
              </div>
            </div>
          </div>
        }

        {
          false &&
          <div>
            <h1 className={styles._sentTitle}> You have send your message!</h1>
            <div className={styles._parentBtnSent}>
              <GeneralButton
                icon={false}
                text='Send new message' />
            </div>
          </div>
        }

      </div>

      {
        true &&
        <div>
          <p className={styles._stepsNumber}> {currentStep} / {steps} </p>
          <div className={styles._stepper}>
            <div className='_step'></div>
          </div>
        </div>
      }

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
