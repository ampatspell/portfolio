import Ember from 'ember';
import Base from './sections/-base';

const {
  inject: { service },
  computed: { equal },
} = Ember;

export default Base.extend({
  classNameBindings: [ ':screen-backend-sections' ],

  router: service(),
  isIndex: equal('router.currentRouteName', 'backend.sections.index'),

  sections: null,

  actions: {
    new(parent) {
      if(parent) {
        this.transitionTo('backend.sections.section.new', parent);
      } else {
        this.transitionTo('backend.sections.new');
      }
    }
  }

});
