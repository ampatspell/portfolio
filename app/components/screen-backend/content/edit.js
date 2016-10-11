import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-content-edit' ],

  model: null,

  editComponentName: computed('model.modelName', function() {
    let name = this.get('model.modelName');
    if(!name) {
      return;
    }
    return `screen-backend/content/edit/${name}`;
  }).readOnly(),

  actions: {
    save() {
      let model = this.get('model');
      model.save().then(() => {
        this.attrs.saved(model);
      });
    }
  }

});
