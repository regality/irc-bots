var exec = require('exec-sync')

function fortune(text) {
  return exec('fortune').replace(/\n/g, ' ');
}

module.exports = fortune;
