import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    let index = this.get('store.db.main.sections.sortedVisibleRootSections').findBy('slug', 'index');
    if(index && index.get('visible')) {
      this.transitionTo('sections.section', index);
    }
  }

});
