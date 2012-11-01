function evalText(text, cb) {
  process.nextTick(function() {
    try {
      var stahp = getStahp();
      (function() {
        var wrapped = 'with(stahp){' + text + '}';
        var response = eval(wrapped);
        cb(null, response);
      }).call({});
    } catch (e) {
      cb(null, e.message);
    }
  });
}


function getStahp() {
  var stahp = {
    require:       function(){},
    eval:          function(){},
    clearTimeout:  function(){},
    clearInterval: function(){},
    setTimeout:    function(){},
    setInterval:   function(){},
    process:       {},
    global:        {},
    GLOBAL:        {},
    root:          {},
    module:        {},
    exports:       {},
    __filename:    '',
    __dirname:     '',
    console: {
      log: function(msg) { return msg; }
    }
  }
  return stahp;
}

module.exports = evalText;
