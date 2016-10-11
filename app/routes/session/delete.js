import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    return this.get('store.session').delete().finally(() => {
      this.transitionTo('index');
    });
  }

});
