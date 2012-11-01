function yell(text) {
  return text.toUpperCase().replace(/[^A-Z]/g, '').split('').join(' ');
}

module.exports = yell;
