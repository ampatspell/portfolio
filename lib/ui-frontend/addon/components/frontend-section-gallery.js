import Ember from 'ember';
import layout from '../templates/components/frontend-section-gallery';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':frontend-section-gallery' ],
  layout,

  rendererComponentName: computed('section.galleryTypeModel.name', function() {
    let name = this.get('section.galleryTypeModel.name');
    if(!name) {
      return;
    }
    return `frontend-section-gallery/${name}`;
  }).readOnly(),

});
