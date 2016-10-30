import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    select(section) {
      if(section.get('isNew')) {
        return;
      }
      this.transitionTo('backend.sections.section', section);
    }
  }

});
