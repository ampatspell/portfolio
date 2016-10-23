import Base from './sections/-base';

export default Base.extend({
  classNameBindings: [ ':screen-backend-sections' ],

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
