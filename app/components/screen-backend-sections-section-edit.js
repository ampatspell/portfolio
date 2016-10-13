import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-section-edit' ],

  model: null,

  editComponentName: computed('model.modelName', function() {
    let name = this.get('model.modelName');
    if(!name) {
      return;
    }
    return `screen-backend-sections-section-edit-${name}`;
  }).readOnly(),

  actions: {
    save() {
      this.attrs.save(this.get('model'));
    },
    cancel() {
      this.attrs.cancel(this.get('model'));
    }
  }

});
