import Ember from 'ember';

const {
  inject: { service },
  RSVP: { all }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-index-text' ],

  confirm: service(),

  actions: {
    reorder(model, pos, relative) {
      console.log('reorder', model+'', pos, relative+'');

      let array = this.get('section.images').sortBy('position');
      array.removeObject(model);

      let idx = array.indexOf(relative);
      if(pos === 'before') {
        array.insertAt(idx, model);
      } else {
        array.insertAt(idx + 1, model);
      }

      array.forEach((model, idx) => {
        model.set('position', idx);
      });

      all(array.map(model => model.save()));
    },
    upload() {
      this.transitionTo('backend.sections.section.gallery.upload', this.get('section'));
    },
    delete(image) {
      this.get('confirm').show(
        'Delete image',
        'Are you sure you want to delete this image?',
        'Delete'
      ).then(() => image.delete());
    }
  }
});
