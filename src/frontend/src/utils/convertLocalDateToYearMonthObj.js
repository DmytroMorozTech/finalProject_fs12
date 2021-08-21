
const monthsMapping = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}

// incoming data sample (string) : "2016-07-08"
// expected output: {month: "July", year: "2016"}
const convertLocalDateToString = (date) => {
  const month = monthsMapping[date.slice(5, 7)]
  const year = date.slice(0, 4)
  return {month, year}
}
export default convertLocalDateToString
