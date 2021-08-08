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
    return numbOfFullYears + 'y'
  }

  if (diffInSeconds >= month) {
    const numbOfFullMonths = Math.floor(diffInSeconds / month)
    return numbOfFullMonths + 'm'
  }

  if (diffInSeconds >= week) {
    const numbOfFullWeeks = Math.floor(diffInSeconds / week)
    return numbOfFullWeeks + 'w'
  }

  if (diffInSeconds >= day) {
    const numbOfFullDays = Math.floor(diffInSeconds / day)
    return numbOfFullDays + 'd'
  }

  if (diffInSeconds >= hour) {
    const numbOfFullHours = Math.floor(diffInSeconds / hour)
    return numbOfFullHours + 'h'
  }

  if (diffInSeconds >= minute) {
    const numbOfFullHours = Math.floor(diffInSeconds / minute)
    return numbOfFullHours + 'm'
  }

  return diffInSeconds + 's'
}

export default calculateTime

// console.log(calculateTime('2021-01-04 19:25:10.111222'))
// console.log(calculateTime('2016-08-08 19:25:10.111222'))
// console.log(calculateTime('2010-06-08 19:25:10.111222'))
// console.log(calculateTime('2020-12-12 19:25:10.111222'))
