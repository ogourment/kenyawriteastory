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
