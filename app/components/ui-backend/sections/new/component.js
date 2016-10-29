import Ember from 'ember';
import Base from '../-base';

const {
  inject: { service },
  on
} = Ember;

export default Base.extend({
  classNameBindings: [ ':ui-backend-sections-new' ],

  backend: service(),

  category: null,
  section: null,

  actions: {
    select(model) {
      let db = this.get('store.db.main');
      let position;
      let category = this.get('category');
      if(category) {
        position = (category.get('sortedSections.lastObject.position') || 0) + 1;
      } else {
        position = (db.get('sections.sortedRootSections.lastObject.position') || 0) + 1;
      }
      let modelName = model.get('name');
      let props = model.mergeDefaults({ category, position });
      let section = db.model(modelName, props);
      this.set('section', section);
    },
    cancel() {
      let section = this.get('section');
      this.set('section', null);
      section.destroy();
    },
    back() {
      let category = this.get('category');
      if(category) {
        this.transitionTo('backend.sections.section', category);
      } else {
        this.transitionTo('backend.sections');
      }
    }
  },

  destroyModel: on('willDestroyElement', function() {
    let section = this.get('section');
    if(section && section.get('isNew')) {
      section.destroy();
    }
  })

});
