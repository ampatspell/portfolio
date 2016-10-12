import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store.db.main.sections.promise');
  },

  actions: {
    new(/*parentCategory*/) {
      // TODO: parent categroy
      this.transitionTo('backend.sections.new');
    },
    select(section) {
      if(section.get('isNew')) {
        return;
      }
      this.transitionTo('backend.sections.section', section);
    }
  }

});
