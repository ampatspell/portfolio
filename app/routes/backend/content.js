import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    // TODO: collection with query
    let main = this.get('store.db.main');
    return main.find({ model: 'section', ddoc: 'section', view: 'all' }).then(() => {
      return main.get('sections');
    });
  },

});
