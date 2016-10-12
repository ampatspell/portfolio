import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store.db.main.allSections.promise');
  },

  actions: {
    new() {
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
