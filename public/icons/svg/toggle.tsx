const Toggle = ({ theme }) => (
  <svg width="19" height="20" viewBox="0 0 17 13" fill={theme == 'dark' ? '#FFF' : '#000'}>
    <path d="M0.00292969 0.00585938H16.014V2.00781H0.00292969V0.00585938ZM0.00292969 5.01074H16.014V7.0127H0.00292969V5.01074ZM0.00292969 10.0156H16.014V12.0176H0.00292969V10.0156Z" fill={theme == 'dark' ? '#FFF' : '#000'} />
  </svg>
)

export default Toggle
