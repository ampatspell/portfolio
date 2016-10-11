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

  actions: {
    new(parentCategory) {
      this.transitionTo('backend.content.new');
    }
  }

});
