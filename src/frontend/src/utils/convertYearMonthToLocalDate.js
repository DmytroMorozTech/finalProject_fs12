
const monthsMapping = {
  'January': '01',
  'February': '02',
  'March': '03',
  'April': '04',
  'May': '05',
  'June': '06',
  'July': '07',
  'August': '08',
  'September': '09',
  'October': '10',
  'November': '11',
  'December': '12'
}

const convertYearMonthToLocalDate = (year, month) => {
  return `${year}-${monthsMapping[month]}-01`
}
export default convertYearMonthToLocalDate