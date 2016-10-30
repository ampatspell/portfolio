import Ember from 'ember';
import scrollTo from 'portfolio/util/scroll-to';

const {
  computed,
  on
} = Ember;

const delta = val => {
  return function() {
    let images = this.get('section.sortedImages');
    let selected = this.get('selectedImage');
    let idx = images.indexOf(selected);
    let next = images.objectAt(idx + val);
    if(!next) {
      if(val < 0) {
        next = images.get('lastObject');
      } else {
        next = images.get('firstObject');
      }
    }
    this.set('selectedImage', next);
  };
};

export default Ember.Component.extend({
  classNameBindings: [ ':ui-frontend-section-content-gallery-content', ':single' ],

  section: null,

  selectedImage: computed('section.sortedImages.firstObject', {
    get() {
      let value = this._selectedImage;
      if(!value) {
        value = this.get('section.sortedImages.firstObject');
        this._selectedImage = value;
      }
      return value;
    },
    set(key, value) {
      this._selectedImage = value;
      return value;
    }
  }),

  selectedImageIndex: computed('selectedImage', 'section.sortedImages.length', function() {
    let images = this.get('section.sortedImages');
    let index = images.indexOf(this.get('selectedImage')) + 1;
    let length = images.get('length');
    return { index, length };
  }).readOnly(),

  actions: {
    prev: delta(-1),
    next: delta(1),
  },

  scrollTo: on('didInsertElement', function() {
    scrollTo(this.get('element'));
  })

});
