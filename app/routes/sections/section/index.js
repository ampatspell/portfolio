import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let model = this.modelFor('sections.section');
    return model.loadNested().then(() => {
      this.get('store.db.main').didSelectSection(model);
    }).then(() => model);
  }

});
