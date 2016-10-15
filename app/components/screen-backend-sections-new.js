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
      let db = this.get('store.db.main');
      let position;
      let category = this.get('category');
      if(category) {
        position = (category.get('sortedSections.lastObject.position') || -1) + 1;
      } else {
        position = (db.get('sections.sortedRootSections.lastObject.position') || -1) + 1;
      }
      let model = db.model(modelName, { category, position, visible: true });
      this.set('model', model);
    },
    cancel() {
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
