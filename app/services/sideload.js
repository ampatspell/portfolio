import Ember from 'ember';

const {
  computed,
  getOwner
} = Ember;

export default Ember.Service.extend({

  request: computed(function() {
    return getOwner(this).lookup('couch:request').create();
  }).readOnly(),

  asset(name) {
    return this.get('request').send({
      url: `/assets/${name}`,
      method: 'get',
      json: false
    });
  }

});