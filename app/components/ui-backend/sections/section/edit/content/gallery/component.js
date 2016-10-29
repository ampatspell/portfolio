import Ember from 'ember';
import Base from '../-base';

const {
  inject: { service },
  RSVP: { all }
} = Ember;

export default Base.extend({
  classNameBindings: [ ':gallery' ],

  backend: service(),

  actions: {
    selectType(type) {
      this.set('section.galleryType', type.get('name'));
    },
    deselectType() {
      this.set('section.galleryType', null);
    },
    save() {
      let gallery = this.get('section');
      if(!gallery.get('galleryTypeModel')) {
        return;
      }
      return all(gallery.get('images').map(image => image.save())).then(() => {
        return this.save();
      });
    }
  }

});
