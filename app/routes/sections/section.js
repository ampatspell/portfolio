import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.get('store.db.main').load('section', params.section_id);
  }

});
