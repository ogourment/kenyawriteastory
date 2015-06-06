//client only code

Template.story.helpers({
  phrases: function () {
    return Phrases.find({}, { sort: { position: 1 } });
  }
});

Template.story.events({

  'submit form': function (event, template) {

    event.preventDefault();
    var position = Phrases.find().count() + 1;
    var phrase = template.find('.nouveau');

    Phrases.insert({
      position: position,
      phrase: phrase.value
    });

    phrase.value = '';
  }
});
