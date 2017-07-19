import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    // let session = this.get('store.session');
    // if(!session.get('isAuthenticated')) {
    //   this.transitionTo('session.new');
    // } else if(!session.get('isAdmin')) {
    //   return this.transitionTo('index');
    // }
    this.get('store.db.main').deselectSections();
  }

});
