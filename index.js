[
  'ossum',
  'l33t',
  'eval',
  'anagram',
  'teen-girl'
].forEach(function(bot) {
  require('./bots/' + bot);
  console.log('starting ' + bot + ' bot');
});
