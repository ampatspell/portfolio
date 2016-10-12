import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store.db.main.sections.promise');
  },

  actions: {
    new(/*parentCategory*/) {
      // TODO: parent categroy
      this.transitionTo('backend.content.new');
    },
    select(section) {
      if(section.get('isNew')) {
        return;
      }
      this.transitionTo('backend.content.section', section);
    }
  }

});
