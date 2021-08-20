
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
  const {issueDateMonth, issueDateYear, expirationDateMonth, expirationDateYear, hasExpiryDate} = obj

  const issueDate = '' + issueDateYear + '-' + monthsMapping[issueDateMonth] + '-01'
  obj.issueDate = issueDate

  if (hasExpiryDate) {
    const expirationDate = '' + expirationDateYear + '-' + monthsMapping[expirationDateMonth] + '-01'
    obj.expirationDate = expirationDate
  }
}
export default convertStringsToLocalDate