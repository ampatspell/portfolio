import Ember from 'ember';

const {
  computed,
  copy,
  RSVP: { all }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-index-text' ],

  // TODO: hasMany is not sortable. this is overwritten on 1st reorder
  sortable: computed('section.sortedImages.@each.position', function() {
    return this.get('section.sortedImages');
  }),

  actions: {
    sort() {
      all(this.get('sortable').map((image, idx) => {
        image.set('position', idx);
        return image.save();
      }));
    },
    upload() {
      this.transitionTo('backend.sections.section.gallery.upload', this.get('section'));
    }
  }
});
