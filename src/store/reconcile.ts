const reconcile = (state, payload) => {
  const keyNames = Object.keys(state);
  let trueState = {}

  keyNames.forEach(key => {
    switch (key) {
      case 'intermittence':
        const currentIntermittence = state[key]
        trueState = { ...trueState, intermittence: currentIntermittence }
        break

      default:
        break
    }
  })

  return trueState
}

export default reconcile
