import Ember from 'ember';

const {
  RSVP: { all }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-content-edit-gallery' ],

  actions: {
    save() {
      all(this.get('model.images').map(image => image.save())).then(() => {
        this.attrs.save(this.get('model'));
      });
    }
  }
});
