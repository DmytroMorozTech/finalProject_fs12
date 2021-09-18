// expected incoming format of timestamp from DB: '2020-12-12 19:25:10.111222'

const calculateTime = (startTime) => {
  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day
  const year = 365 * day

  const startTimestamp = Date.parse(startTime)
  const currentTimestamp = Date.now()

  const diffInSeconds = (currentTimestamp - startTimestamp) / 1000

  if (diffInSeconds >= year) {
    const numbOfFullYears = Math.floor(diffInSeconds / year)
    return numbOfFullYears + ' years'
  }

  if (diffInSeconds >= month) {
    const numbOfFullMonths = Math.floor(diffInSeconds / month)
    return numbOfFullMonths + ' months'
  }

  if (diffInSeconds >= week) {
    const numbOfFullWeeks = Math.floor(diffInSeconds / week)
    return numbOfFullWeeks + ' weeks'
  }

  if (diffInSeconds >= day) {
    const numbOfFullDays = Math.floor(diffInSeconds / day)
    return numbOfFullDays + ' days'
  }

  if (diffInSeconds >= hour) {
    const numbOfFullHours = Math.floor(diffInSeconds / hour)
    return numbOfFullHours + ' hours'
  }

  if (diffInSeconds >= minute) {
    const numbOfFullMinutes = Math.floor(diffInSeconds / minute)
    return numbOfFullMinutes + ' minutes'
  }

  return '1 minute'
}

export default calculateTime