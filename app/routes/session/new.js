import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    if(!this.get('store.session.isAuthenticated')) {
      return;
    }
    this.transitionTo('index');
  }

});
