var bot = require('./bot');

[
  'ossum',
  //'l33t',
  'eval',
  'anagram',
  //'fortune',
  'teen-girl'
].forEach(function(name) {
  console.log('starting ' + name + ' bot');
  var fn = require('./bots/' + name);
  bot(name, fn);
});
