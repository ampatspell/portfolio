import Ember from 'ember';
import Base from './-base';
import ScrollTop from 'portfolio/util/scroll-top-component';

const {
  computed
} = Ember;

export default Base.extend(ScrollTop, {
  classNameBindings: [ ':screen-backend-sections-edit' ],

  section: null,

  componentName: computed('section.modelName', function() {
    let name = this.get('section.modelName');
    if(!name) {
      return;
    }
    return `screen-backend/sections/section/edit/${name}`;
  }).readOnly(),

  actions: {
    cancel() {
      if(this.attrs.cancel) {
        this.attrs.cancel();
      }
    }
  }

});
