import Ember from 'ember';

const {
  inject: { service },
  on
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-content-new' ],

  backend: service(),

  model: null,

  actions: {
    select(modelName) {
      let model = this.get('store.db.main').model(modelName);
      this.set('model', model);
    },
    cancelled() {
      let model = this.get('model');
      this.set('model', null);
      model.destroy();
    }
  },

  destroyModel: on('willDestroyElement', function() {
    let model = this.get('model');
    if(model && model.get('isNew')) {
      model.destroy();
    }
  }),

});
