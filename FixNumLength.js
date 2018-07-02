function FixNumLength(num, length) {
  return ('' + num).length < length
    ? ((new Array(length + 1)).join('0') + num).slice(-length)
    : '' + num;
}

//decimal指原本的数字，num指保留几位小数
function KeepDecimal(decimal, num) {
  decimal = Math.round(decimal * Math.pow(10, num)) / Math.pow(10, num);
  return decimal;
}

export {FixNumLength, KeepDecimal};
