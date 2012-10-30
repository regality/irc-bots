var bot = require("../bot")
  , anagram = require("anagram")
  ;

anagram.init(__dirname + '/../lib/twl06.js', function(err) {
  if (err) throw err;

  bot('anagram', function(text, cb) {
    anagram.findAnagrams(text, function(err, anagrams) {
      var index = 0;
      if (err || !anagrams || !anagrams.items) return cb(null, null);
      for (var i in anagrams.items) {
        index = Math.max(index, Number(i));
      }
      var longest = anagrams.items[index].pop().w;
      cb(null, longest);
    });
  });

});
