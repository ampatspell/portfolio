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
      let model = this.get('model');
      model.save().then(() => {
        this.attrs.saved(model);
      });
    },
    cancel() {
      this.attrs.cancelled();
    }
  }

});
