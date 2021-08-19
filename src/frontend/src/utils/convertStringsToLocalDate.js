
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

const convertStringsToLocalDate = (obj) => {
  const {startMonth, startYear, endMonth, endYear} = obj

  const dateStart = '' + startYear + '-' + monthsMapping[startMonth] + '-' + '01'
  const dateFinish = '' + endYear + '-' + monthsMapping[endMonth] + '-' + '01'

  obj.dateStart = dateStart
  obj.dateFinish = dateFinish
}
export default convertStringsToLocalDate