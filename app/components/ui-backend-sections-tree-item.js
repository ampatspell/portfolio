import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-tree-item', 'faded:faded' ],

  faded: false,

  nested: computed('model.sections', function() {
    let sections = this.get('model.sections');
    if(!sections) {
      return;
    }
    return sections.sortBy('position');
  }).readOnly(),

  actions: {
    click() {
      if(this.attrs.select) {
        this.attrs.select(this.get('model'));
      }
    },
    over() {
      this.set('faded', true);
    },
    out() {
      this.set('faded', false);
    },
    drop(model) {
      console.log('drop', model+'');
    }
  }

});
