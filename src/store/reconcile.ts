const reconcile = (state, payload) => {
  const keyNames = Object.keys(state)
  let trueState = {}

  keyNames.forEach(key => {
    switch (key) {
      case 'intermittence':
        const currentIntermittence = state[key]
        trueState = { ...trueState, intermittence: currentIntermittence }
        break

      case 'scrollReference':
        const currentScrollReference = state[key]
        trueState = { ...trueState, scrollReference: currentScrollReference }
        break

      default:
        break
    }
  })

  return trueState
}

export default reconcile
