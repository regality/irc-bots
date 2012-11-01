var irc = require("irc")
  , server = "irc.freenode.net"
  , channel = "#ifit"
  ;

module.exports = bot;

function bot(name, onMessage) {
  // Create the bot name
  var bot = new irc.Client(server, 'bot-' + name, {
    channels: [channel]
  });

  function say(msg) {
    if (msg) {
      console.log(name + ' says: ' + msg);
      bot.say(channel, '-- ' + msg);
    }
  }

  if (onMessage.length === 1) {
    // Listen for a message
    bot.addListener("message", function(from, to, text, message) {
      if (from.match(/^bot-/)) return;
      var response = onMessage(text);
      say(response)
    });
  } else {
    // Listen for a message
    bot.addListener("message", function(from, to, text, message) {
      if (from.match(/^bot-/)) return;
      onMessage(text, function(err, response) {
        if (err) return say(err.message);
        say(response)
      });
    });
  }

}
