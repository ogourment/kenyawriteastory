//client only code

Template.story.helpers({

  title: function () {
    var title = Stories.findOne();
    return title ? title.title : '';
  },
  phrases: function () {
    return Phrases.find({}, { sort: { position: 1 } });
  }
});

Template.story.events({

  'click .eraseAll': function (event, template) {

    Meteor.call('eraseAll');
  },

  'click .rename': function (event, template) {

    event.preventDefault();

    var title = template.find('input[name="title"]');

    Stories.insert({
      title: title.value
    });
  },

  'click .add': function (event, template) {

    event.preventDefault();
    var position = Phrases.find().count() + 1;
    var phrase = template.find('.new');

    Phrases.insert({
      position: position,
      phrase: phrase.value
    });

    phrase.value = '';
  }
});

Template.photo.helpers({
  photo: function () {
    var photo = Photos.findOne();
    return photo ? photo.data : "";
  }
});

Template.photo.events({

  'click .takePhoto': function (event, template) {
    var cameraOptions = {
      width: 800,
      height: 600
    };
    MeteorCamera.getPicture(cameraOptions, function (error, data) {
      if (!error) {
        Photos.insert({ data: data });
      }
    });
    event.preventDefault();
  }
});
