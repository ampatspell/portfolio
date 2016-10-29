import Ember from 'ember';
import Base from '../base';

const {
  computed
} = Ember;

export default Base.extend({
  classNameBindings: [ ':ui-frontend-section-content', ':gallery' ],

  shouldScrollTop: false,

  rendererComponentName: computed('section.galleryTypeModel.name', function() {
    let name = this.get('section.galleryTypeModel.name');
    if(!name) {
      return;
    }
    return `ui-frontend/sections/section/content/gallery/content/${name}`;
  }).readOnly(),

});
