export const caracasParseHour = () => {
  const date = new Date()
  const timeZone =  date.toLocaleString('en-US', { timeZone: 'America/Caracas' })
  const caracasDate = new Date(timeZone)
  const parseDate = parseHour(caracasDate)
  return parseDate
}

export const parseHour = (date: Date) => {
  const newDate = new Date(date)
  let hours = newDate.getHours()
  let minutes: any = newDate.getMinutes()
  let ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? `0${minutes}` : minutes

  const strTime = `${hours}:${minutes} ${ampm}`
  return strTime
}
