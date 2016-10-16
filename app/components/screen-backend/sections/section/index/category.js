import Ember from 'ember';
import Base from './-base';

export default Base.extend({
  classNameBindings: [ ':screen-backend-sections-index-category' ],

  actions: {
    new() {
      this.transitionTo('backend.sections.section.new', this.get('section'));
    }
  }

});
