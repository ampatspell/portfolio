import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    if(!this.get('store.session.isAuthenticated')) {
      this.transitionToRoute('session.new');
    }
  }

});
