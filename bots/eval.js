require("../bot")('eval', evalText);

function evalText(text) {
  var stahp = {
    require: function(){},
    process: {},
    console: {
      log: function(msg) { return msg; }
    }
  }
  try {
    return eval('with(stahp){' + text + '}');
  } catch (e) {
    return e.message;
  }
}

