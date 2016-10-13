import Ember from 'ember';
import { array } from '../util/computed';

const {
  on,
  RSVP: { all }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-gallery-upload' ],

  images: array(),

  actions: {
    files(files) {
      let db = this.get('section.database');
      this.get('images').pushObjects(files.map(file => db.model('gallery-image', {
        filename: file.name,
        attachments: [
          { name: 'original', data: file }
        ]
      })));
    },
    clear() {
      this.clear();
    },
    save() {
      this.get('section.images.promise').then(() => {
        let position = Math.max(Math.max(...this.get('section.images').mapBy('position')) + 1, 0);
        let gallery = this.get('section');
        all(this.get('images').map((image, idx) => {
          image.setProperties({
            position: position + idx,
            gallery: gallery
          });
          return image.save();
        })).then(() => {
          return gallery.save();
        }).then(() => {
          this.transitionTo('backend.sections.section', gallery);
        });
      });
    },
    cancel() {
      this.clear();
      this.transitionTo('backend.sections.section', this.get('section'));
    }
  },

  clear() {
    let images = this.get('images');
    images.forEach(image => image.destroy());
    images.clear();
  },

  destroyNewImages: on('willDestroyElement', function() {
    this.get('images').filter(image => image.get('isNew')).forEach(image => image.destroy());
  }),

});
