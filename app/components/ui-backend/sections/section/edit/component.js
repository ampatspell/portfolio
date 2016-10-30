import Ember from 'ember';
import Base from '../-base';
import ScrollTop from 'portfolio/mixins/scroll-top';

const {
  computed
} = Ember;

export default Base.extend(ScrollTop, {
  classNameBindings: [ ':ui-backend-sections-section-edit' ],

  section: null,

  componentName: computed('section.modelName', function() {
    let name = this.get('section.modelName');
    if(!name) {
      return;
    }
    return `ui-backend/sections/section/edit/content/${name}`;
  }).readOnly(),

  actions: {
    cancel() {
      if(this.attrs.cancel) {
        this.attrs.cancel();
      }
    }
  }

});
