import Ember from 'ember';
import Base from '../-base';
import ScrollTop from 'portfolio/mixins/scroll-top';

const {
  computed,
  inject: { service }
} = Ember;

export default Base.extend(ScrollTop, {
  classNameBindings: [ ':ui-backend-sections-section-index' ],

  fastboot: service(),

  componentName: computed('section.modelName', function() {
    let section = this.get('section');
    if(!section) {
      return;
    }
    return `ui-backend/sections/section/index/content/${section.get('modelName')}`;
  }).readOnly(),

  subtitle: computed('section.modelScreenName', 'section.visible', function() {
    let { modelScreenName, visible } = this.get('section').getProperties('modelScreenName', 'visible');
    if(visible) {
      return modelScreenName;
    }
    return `Hidden ${modelScreenName.toLowerCase()}`;
  }).readOnly(),

  url: computed('section.path', function() {
    if(this.get('fastboot.isFastBoot')) {
      return;
    }
    let path = this.get('section.path');
    if(!path) {
      return;
    }
    return `${window.location.origin}/pages/${path}`;
  }).readOnly(),

  actions: {
    open() {
      this.transitionTo('sections.section', this.get('section'));
    }
  }

});
