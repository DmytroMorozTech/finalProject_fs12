
const monthsMapping = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sept',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
}

// incoming data sample (string) : "2016-07-08"
// expected output: Jul 2016
const convertLocalDateToString = (date) => {
  const month = monthsMapping[date.slice(5, 7)]
  const year = date.slice(0, 4)
  return `${month} ${year}`
}
export default convertLocalDateToString
