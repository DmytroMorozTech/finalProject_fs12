import convertYearMonthToLocalDate from './convertYearMonthToLocalDate'

const convertStrToLocalDateExperience = (obj) => {
  const {startMonth, startYear, endMonth, endYear, isCurrentlyEmployed} = obj

  obj.dateStart = convertYearMonthToLocalDate(startYear, startMonth)

  if (!isCurrentlyEmployed) {
    obj.dateFinish = convertYearMonthToLocalDate(endYear, endMonth)
  }
}

export default convertStrToLocalDateExperience