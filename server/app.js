//server only code

Meteor.startup(function () {

  if (Phrases.find().count() === 0) {

    _createPhrases();
  }
});

Meteor.methods({

  eraseAll: function () {

    Stories.remove({});
    Photos.remove({});
    Phrases.remove({});

    _createPhrases();
  }
});

function _createPhrases() {

  var phrases = [ "Once upon a time" ];

  var position = 0;

  _.each(phrases, function (phrase) {

    Phrases.insert({
      phrase: phrase,
      position: ++position
    });
  });
}
