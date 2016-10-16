import Ember from 'ember';
import Base from './sections/-base';

export default Base.extend({
  classNameBindings: [ ':screen-backend-sections' ],

  sections: null,

  actions: {
    new() {

    }
  }

});
