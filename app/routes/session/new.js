import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store.session');
  },

  actions: {
    save() {
      this.currentModel.save().then(() => {
        this.transitionTo('index');
      }, err => {
        console.log(err);
      });
    }
  }
});
