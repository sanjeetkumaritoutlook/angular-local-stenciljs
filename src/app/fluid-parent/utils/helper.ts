import { DatePipe } from '@angular/common';

export const changeArrayToString = (rawredactedValue, fieldArray) => {
  for (let key in rawredactedValue) {
    for (let i = 0; i < fieldArray.length; i++) {
      if (key === fieldArray[i]) {
        rawredactedValue[key] = rawredactedValue[key]
          ? String(rawredactedValue[key])
          : '';
      }
    }
  }
};

export const changeFormatType = (
  rawredactedValue,
  fieldArray,
  dateFormat,
  formatType = null
) => {
  for (let key in rawredactedValue) {
    // if the key is array type then check the array items
    if (Array.isArray(rawredactedValue[key])) {
      for (let element of rawredactedValue[key]) {
        for (let arrKey in element) {
          for (let i = 0; i < fieldArray.length; i++) {
            if (element[arrKey] && arrKey === fieldArray[i]) {
              let tempField = JSON.parse(JSON.stringify(element));
              if (formatType != null) {
                element[arrKey] = formatType(tempField[arrKey]);
              } else {
                element[arrKey] = new DatePipe('en-US').transform(
                  tempField[arrKey],
                  dateFormat
                );
              }
            }
          }
        }
      }
    } else {
      for (let i = 0; i < fieldArray.length; i++) {
        if (rawredactedValue[key] && key === fieldArray[i]) {
          let tempField = JSON.parse(JSON.stringify(rawredactedValue));
          if (formatType != null) {
            rawredactedValue[key] = formatType(tempField[key]);
          } else {
            rawredactedValue[key] = new DatePipe('en-US').transform(
              tempField[key],
              dateFormat
            );
          }
        }
      }
    }
  }
};
// change date into iso format
export const changeDateToISOFormat = (rawredactedValue, fieldArray) => {
  for (let key in rawredactedValue) {
    for (let i = 0; i < fieldArray.length; i++) {
      if (rawredactedValue[key] && key === fieldArray[i]) {
        rawredactedValue[key] = new Date(rawredactedValue[key])
          .toISOString()
          .replace(/\.[0-9]{3}/, '');
      }
    }
  }
};
// change value into rounded format
export const changeValueToRoundoff = (rawredactedValue, fieldArray) => {
  for (let key in rawredactedValue) {
    for (let i = 0; i < fieldArray.length; i++) {
      if (rawredactedValue[key] && key === fieldArray[i]) {
        rawredactedValue[key] = rawredactedValue[key]
          ? String(Math.round(Number(rawredactedValue[key])))
          : '';
      }
    }
  }
};

export const getCalcMonthNameEng = (dateInputDataValue) => {
  const mNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoMonth = new Date(dateInputDataValue).getMonth();
    for (let i = 0; i < mNames.length; i++) {
      if (mNames[i] === mNames[isoMonth]) {
        let isoCalcMonth = mNames[isoMonth];
        return isoCalcMonth;
      }
    }
  }
};

export const getCalcMonthName = (dateInputDataValue) => {
  const mNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const mCalcNames = [
    'Januar',
    'Feburar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
    'ERR',
  ];
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoMonth = new Date(dateInputDataValue).getMonth();
    for (let i = 0; i < mNames.length; i++) {
      if (mNames[i] === mNames[isoMonth]) {
        let isoCalcMonth = mCalcNames[isoMonth];
        return isoCalcMonth;
      }
    }
  }
};

export const getCalcYYYY = (dateInputDataValue) => {
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoYear = new Date(dateInputDataValue).getFullYear();
    let isoMonthYear = String(isoYear);
    return isoMonthYear;
  }
};

export const getMonthName = (dateInputDataValue) => {
  const mNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoMonth = new Date(dateInputDataValue).getMonth();
    let isoYear = new Date(dateInputDataValue).getFullYear();
    let isoMonthYear = mNames[isoMonth] + ' ' + String(isoYear);
    return isoMonthYear;
  }
};

export const getMonthNameMinus1 = (dateInputDataValue) => {
  const mNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoMonth = new Date(dateInputDataValue).getMonth();
    let isoYear = new Date(dateInputDataValue).getFullYear();
    let isoMonthYear = mNames[isoMonth - 1] + ' ' + String(isoYear - 1);
    return isoMonthYear;
  } else {
    return '';
  }
};

export const getOnlyDayWithPad = (dateInputDataValue) => {
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoDate = String(new Date(dateInputDataValue).getDate()).padStart(
      2,
      '0'
    );
    return String(isoDate);
  }
};

export const getRenewDay = (dateInputDataValue, count) => {
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoDate = new Date(dateInputDataValue).getDate();
    let month = new Date(dateInputDataValue).getMonth();
    let year = new Date(dateInputDataValue).getFullYear();
    let getDaysInMonth = [
      31,
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ][month];
    isoDate =
      getDaysInMonth === isoDate
        ? count
        : new Date(dateInputDataValue).getDate() + count;
    return String(isoDate).padStart(2, '0');
  }
};

export const getRenewMonthName = (dateInputDataValue, count) => {
  const mNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoDate = new Date(dateInputDataValue).getDate();
    let month = new Date(dateInputDataValue).getMonth();
    let year = new Date(dateInputDataValue).getFullYear();
    let isoMonth;
    let getDaysInMonth = [
      31,
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ][month];
    if (isoDate === 31 && mNames[month] === 'December') {
      isoMonth = 0;
    } else if (getDaysInMonth === isoDate && mNames[month] !== 'December') {
      isoMonth = month + count;
    } else {
      isoMonth = month;
    }
    let isoYear =
      isoDate === 31 && mNames[month] === 'December'
        ? new Date(dateInputDataValue).getFullYear() + count
        : new Date(dateInputDataValue).getFullYear();
    let isoMonthYear = mNames[isoMonth] + ' ' + String(isoYear);
    return isoMonthYear;
  }
};

//get current english month name
export const getCurrentMonthName = (dateInputDataValue) => {
  const mNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoMonth = new Date(dateInputDataValue).getMonth();
    return mNames[isoMonth];
  }
};

export const getCalcMonthNameForHagueInvoice = (dateInputDataValue) => {
  const mNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const mCalcNames = [
    'januari',
    'februari',
    'maart',
    'april',
    'mei',
    'juni',
    'juli',
    'augustus',
    'september',
    'oktober',
    'november',
    'december',
    'ERR',
  ];
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoMonth = new Date(dateInputDataValue).getMonth();
    for (let i = 0; i < mNames.length; i++) {
      if (mNames[i] === mNames[isoMonth]) {
        let isoCalcMonth = mCalcNames[isoMonth];
        return isoCalcMonth;
      }
    }
  }
};

export const getCalcMonthNameForCologneP = (dateInputDataValue) => {
  const mNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const mCalcNames = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
    'ERR',
  ];
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoMonth = new Date(dateInputDataValue).getMonth();
    for (let i = 0; i < mNames.length; i++) {
      if (mNames[i] === mNames[isoMonth]) {
        let isoCalcMonth = mCalcNames[isoMonth];
        return isoCalcMonth;
      }
    }
  }
};

export const getCurrentMonthNameFrench = (dateInputDataValue) => {
  if (dateInputDataValue && dateInputDataValue != '') {
    const mNamesF = [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ];
    if (dateInputDataValue && dateInputDataValue != '') {
      let isoMonth = new Date(dateInputDataValue).getMonth();
      return mNamesF[isoMonth];
    }
  } else {
    return 'Error';
  }
};

export const getDaySufixFrench = (dateInputDataValue) => {
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoDate = new Date(dateInputDataValue).getDate();
    let sufix = '';
    if (isoDate == 1) {
      sufix = 'er';
    } else {
      sufix = '';
    }
    return sufix;
  } else {
    return '';
  }
};

export const getDaySufix = (dateInputDataValue) => {
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoDate = new Date(dateInputDataValue).getDate();
    let sufix = '';
    if (isoDate == 1 || isoDate == 21 || isoDate == 31) {
      sufix = 'st';
    } else if (isoDate == 2 || isoDate == 22) {
      sufix = 'nd';
    } else if (isoDate == 3 || isoDate == 23) {
      sufix = 'rd';
    } else {
      sufix = 'th';
    }
    return sufix;
  }
};

// difference in two dates
export const getDiffDay = (date_1, date_2) => {
  if (date_1 != '' && date_2 != '') {
    let date1 = new Date(date_1);
    let date2 = new Date(date_2);
    let timeDiff = Math.round(date1.getTime() - date2.getTime());
    console.log(timeDiff);
    let diffDays = timeDiff / (24 * 3600 * 1000);
    console.log(diffDays);
    return diffDays;
  } else {
    return '';
  }
};

export const getOnlyDay = (dateInputDataValue) => {
  if (dateInputDataValue && dateInputDataValue != '') {
    let isoDate = new Date(dateInputDataValue).getDate();
    return String(isoDate);
  }
};
//works for leap year also, also handle variances in the number of days in a month.
export const deltaDate = (input, days, months, years) => {
  return new Date(
    input.getFullYear() + years,
    input.getMonth() + months,
    Math.min(
      input.getDate() + days,
      new Date(
        input.getFullYear() + years,
        input.getMonth() + months + 1,
        0
      ).getDate()
    )
  );
};

export const disableInputOnFalse = (val) => {
  if (val === 'true') {
    return true;
  } else if (val === 'false') {
    return false;
  }
};

export const disableInput = (val) => {
  if (val === 'true') {
    return false;
  } else if (val === 'false') {
    return true;
  }
};

//GRSAM-28978: Recreate Scenario- for Changed Date field not pre-populating correctly within array
export const arrayDateRecreate = (value) =>
  String(value).match(
    /[+-]?\d{4}(-[01]\d(-[0-3]\d(T[0-2]\d:[0-5]\d:?([0-5]\d(\.\d+)?)?([+-][0-2]\d:[0-5]\d)?Z?)?)?)?/
  );
