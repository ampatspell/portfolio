import Ember from 'ember';

const {
  RSVP: { all }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-gallery-upload' ],

  images: null,

  actions: {
    files(files) {
      let gallery = this.get('section');
      let db = gallery.get('database');
      let images = files.map(file => {
        let image = db.model('gallery-image', { gallery, filename: file.name });
        image.get('attachments').pushObject({ name: 'original', data: file });
        return image;
      });
      this.set('images', images);
    },
    save() {
      let section = this.get('section');
      all(section.get('images').map(image => image.save())).then(() => {
        return section.save();
      }).then(() => {
        this.transitionTo('backend.sections.section', section);
      });
    },
    cancel() {
      this.transitionTo('backend.sections.section', this.get('section'));
    }
  }
});
