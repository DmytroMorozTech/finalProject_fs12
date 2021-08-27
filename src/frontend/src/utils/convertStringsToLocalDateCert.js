import convertYearMonthToLocalDate from './convertYearMonthToLocalDate'

const convertStringsToLocalDateCert = (obj) => {
  const {issueDateMonth, issueDateYear, expirationDateMonth, expirationDateYear, hasExpiryDate} = obj

  obj.issueDate = convertYearMonthToLocalDate(issueDateYear, issueDateMonth)

  if (hasExpiryDate) {
    obj.expirationDate = convertYearMonthToLocalDate(expirationDateYear, expirationDateMonth)
  }
}
export default convertStringsToLocalDateCert