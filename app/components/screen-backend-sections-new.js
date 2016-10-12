import Ember from 'ember';

const {
  inject: { service },
  on
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':screen-backend-sections-new' ],

  backend: service(),

  category: null,
  model: null,

  actions: {
    select(modelName) {
      let category = this.get('category');
      let model = this.get('store.db.main').model(modelName, { category, visible: true });
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
