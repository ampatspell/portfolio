import Ember from 'ember';
import Base from './-base';

const {
  RSVP: { all }
} = Ember;

export default Base.extend({
  classNameBindings: [ ':screen-backend-sections-edit-gallery' ],

  actions: {
    save() {
      let gallery = this.get('section');
      return all(gallery.get('images').map(image => image.save())).then(() => {
        return this.save();
      });
    }
  }

});
