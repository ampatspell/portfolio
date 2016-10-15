import Ember from 'ember';

const {
  RSVP: { all }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-index-text' ],

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
    }
  }
});
