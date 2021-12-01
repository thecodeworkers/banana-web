import { useState, useEffect, useRef } from 'react'
import { GeneralButton } from '@components'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setContactForm, sendContactData, setStatus, setSended } from '@store/actions'
import { sleep } from '@utils'

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

  const inputReference = useRef(null)

  useEffect(() => {
    calculateInitialWidth()
  }, [])

  const calculateInitialWidth = () => setWidth(result ?? 0)

  const nextStep = () => {
    inputReference.current.focus()
    const prevState = contact?.contactData
    const key = contactData[currentStep - 1]?.input.placeholder
    const newArray = Object.keys(prevState)

    dispatch(setContactForm({ contactData: { ...prevState, [key]: inputValue } }))

    const localStep = newArray[currentStep]
    const inputNextValue = prevState[localStep]
    const contactLength = Object.keys(prevState).length

    if (currentStep < steps) {
      if (!inputNextValue && currentStep !== contactLength) setWidth((width: number) => width + result)
      setCurrentStep((currentStep: number) => ++currentStep)
      !inputNextValue ? setInputValue('') : setInputValue(inputNextValue)
      return
    }

    const data = { ...prevState, [key]: inputValue }
    dispatch(sendContactData(data))
  }

  const previousStep = () => {
    inputReference.current.focus()

    if (currentStep > 1) {
      const newArray = Object.keys(contact?.contactData)
      const result = currentStep - 2
      const key = newArray[result]
      const previousData = contact?.contactData[key]

      setInputValue(previousData)
      setCurrentStep(currentStep - 1)
    }
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

  const showAlert = async () => {
    const alertData = { color: '#FF4F4F', type: 'error', text: 'Error!', status: 1 }
    await dispatch(setStatus({ alert: alertData }))
    await sleep(2000)
    dispatch(setStatus({ alert: { ...alertData, status: 2 } }))
  }

  const resetForm = () => {
    setCurrentStep(1)
    calculateInitialWidth()
    dispatch(setSended(false))
  }

  useEffect(() => {
    if (contact.sended) {
      dispatch(setContactForm({ contactData: {} }))
      setInputValue('')
    }
  }, [contact])

  return (
    <>
      <div className={!contact?.sended ? styles._main : styles._mainYellow}>
        <div className={styles._titleParent}>
          <div className={styles._titleChild}>
            <h1 className={!contact?.sended ? styles._title : styles._titleWhite}>{localData?.title}</h1>
            <hr className={!contact?.sended ? styles._underscore : styles._underscoreWhite}></hr>
          </div>
        </div>

        {
          !contact?.sended &&
          <div className={styles._contentParent}>
            <p className={currentStep == 1? styles._textOne : styles._textOneMargin}>
              {currentStep == 1 ? localData?.firstSubtitle : contactData[currentStep - 1]?.Question}
            </p>

            { currentStep == 1 && <p className={styles._textTwo}> {localData?.secondSubtitle}</p> }
            { currentStep == 1 && <p className={styles._question}>{contactData[currentStep - 1]?.Question}</p> }

            <div className={styles._formParent}>
              <div>
                <input
                  type={contactData[currentStep - 1]?.input.Type}
                  placeholder={contactData[currentStep - 1]?.input.name}
                  className={styles._input}
                  value={inputValue}
                  onChange={inputHandler}
                  ref={inputReference}
                >
                </input>
              </div>
              <div className={styles._parentBtn}>

                <div className={styles._parentSubBtn}>
                  <GeneralButton
                    textColor='#000'
                    background='#FFF'
                    borderColor='#000'
                    icon={false}
                    text='Regresar'
                    method={previousStep}
                  />
                </div>

                <div className={styles._parentSubBtn}>
                  <GeneralButton
                    icon={false}
                    text={localData?.button?.text}
                    method={isValid && inputValue.length ? nextStep : showAlert}
                  />
                </div>
              </div>
            </div>
          </div>
        }

        {
          contact?.sended &&
          <div>
            <h1 className={styles._sentTitle}> You have send your message!</h1>
            <div className={styles._parentBtnSent}>
              <GeneralButton
                icon={false}
                text='Send new message'
                method={resetForm}
                borderColor='#000'
              />
            </div>
          </div>
        }

      </div>

      {
        !contact?.sended &&
        <div style={{ width: '100%' }}>
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
