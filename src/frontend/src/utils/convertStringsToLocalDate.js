import convertYearMonthToLocalDate from './convertYearMonthToLocalDate'

const convertStringsToLocalDate = (obj) => {
  const {startMonth, startYear, endMonth, endYear} = obj
  obj.dateStart = convertYearMonthToLocalDate(startYear, startMonth)
  obj.dateFinish = convertYearMonthToLocalDate(endYear, endMonth)
}
export default convertStringsToLocalDate