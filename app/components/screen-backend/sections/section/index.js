import Ember from 'ember';
import Base from './-base';

const {
  computed
} = Ember;

export default Base.extend({
  classNameBindings: [ ':screen-sections-section-index' ],

  componentName: computed('section.modelName', function() {
    let section = this.get('section');
    if(!section) {
      return;
    }
    return `screen-backend/sections/section/index/${section.get('modelName')}`;
  }).readOnly(),

  subtitle: computed('section.modelScreenName', 'section.visible', function() {
    let { modelScreenName, visible } = this.get('section').getProperties('modelScreenName', 'visible');
    if(visible) {
      return modelScreenName;
    }
    return `Hidden ${modelScreenName.toLowerCase()}`;
  }).readOnly(),

  url: computed('section.path', function() {
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
