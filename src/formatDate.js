'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  // write code here
  const initialDivider = fromFormat[3];
  const outputDivider = toFormat[3];
  const dateArr = date.split(initialDivider);
  const outputArr = [];
  let day = -10;
  let month = -10;
  let year = -10;

  for (let i = 0; i < dateArr.length; i++) {
    switch (fromFormat[i]) {
      case 'DD':
        day = '' + dateArr[i];
        break;
      case 'MM':
        month = '' + dateArr[i];
        break;
      case 'YYYY':
        year = '' + dateArr[i];
        break;
      case 'YY':
        year = yearGenetate(dateArr[i]);
        break;
    }
  }

  for (let i = 0; i < toFormat.length - 1; i++) {
    if (toFormat[i] === 'DD') {
      outputArr[i] = day;
    } else if (toFormat[i] === 'MM') {
      outputArr[i] = month;
    } else if (toFormat[i] === 'YYYY') {
      outputArr[i] = year;
    } else if (toFormat[i] === 'YY') {
      outputArr[i] = year[2] + year[3];
    }
  }

  const rez = outputArr.join(outputDivider);

  return rez;
}

function yearGenetate(value) {
  if (value < 30) {
    return `20${value}`;
  }

  return `19${value}`;
}

module.exports = formatDate;
