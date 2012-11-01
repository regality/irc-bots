function l33t(str) {
  return str.split('').map(l33tLetter).join('');
}

function l33tLetter(l) {
  return map[l] || l;
}

var map = {
  a: '4',
  o: '0',
  e: '3',
  t: '7',
  l: '1',
  w: '\\/\\/',
  c: '(',
  b: '&'
};

module.exports = l33t;
