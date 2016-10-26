import Ember from 'ember';
import Base from './frontend-section-base';
import layout from '../templates/components/frontend-section-gallery';

const {
  computed
} = Ember;

export default Base.extend({
  classNameBindings: [ ':frontend-section-gallery' ],
  layout,

  rendererComponentName: computed('section.galleryTypeModel.name', function() {
    let name = this.get('section.galleryTypeModel.name');
    if(!name) {
      return;
    }
    return `frontend-section-gallery/${name}`;
  }).readOnly(),

  shouldScrollTop: false,

});
