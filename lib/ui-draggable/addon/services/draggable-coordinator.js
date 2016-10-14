import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Service.extend({

  data: null,
  over: null,

  start(model) {
    if(this.get('current')) {
      return false;
    }
    this.set('current', model);
    return true;
  },

  peek() {
    return this.get('current');
  },

  stop() {
    let model = this.get('current');
    this.set('current', null);
    return model;
  },

});
