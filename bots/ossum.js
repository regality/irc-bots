require("../bot")('ossum', yell);

function yell(str) {
  str = str.toUpperCase().replace(/[^A-Z]/g, '').split('').join(' ');
  return str;
}

