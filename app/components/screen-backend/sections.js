import Ember from 'ember';
import Base from './sections/-base';
import createMasterDetailClass from './-master-detail-class';

const MasterDetailClass = createMasterDetailClass('backend.sections.index');

export default Base.extend(MasterDetailClass, {
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
