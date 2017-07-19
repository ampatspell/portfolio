import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let section = this.modelFor('backend.sections.section');
    return section;
    // return section.loadNested().then(() => section);
  }

});
