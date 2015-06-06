//server only code

Meteor.startup(function () {

  if (Phrases.find().count() === 0) {

    var phrases = [ "Il était une fois" ];

    var position = 0;

    _.each(phrases, function (phrase) {

      Phrases.insert({
        phrase: phrase,
        position: ++position
      });
    });
  }
});
