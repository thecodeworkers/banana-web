const reconcile = (state, payload) => {
  const keyNames = Object.keys(state);
  let trueState = {}

  keyNames.forEach(key => {
    switch (key) {
     /*  case 'page':
        const currentPage = state[key]
        trueState = { ...trueState, page: currentPage }

        break
 */
      case 'intermittence':
        const currentIntermittence = state[key]
        trueState = { ...trueState, intermittence: currentIntermittence }
        break

      default:
        break
    }
  });

  return trueState
}

export default reconcile
