import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    let session = this.get('store.session');
    if(!session.get('isAuthenticated')) {
      this.transitionTo('session.new');
    } else if(!session.get('isAdmin')) {
      return this.transitionTo('index');
    }
  },

  model() {
    // TODO: collection with query
    let main = this.get('store.db.main');
    let collection = main.get('sections');
    return main.find({ ddoc: 'section', view: 'all' }).then(() => {
      return collection;
    });
  },

  actions: {
    new(parentCategory) {
      this.transitionTo('backend.content.new');
    }
  }

});
