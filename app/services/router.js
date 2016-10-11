import Ember from 'ember';

const {
  getOwner,
  computed,
  computed: { oneWay }
} = Ember;

export default Ember.Service.extend({

  router: computed(function() {
    return getOwner(this).lookup('router:main');
  }).readOnly(),

  currentRouteName: oneWay('router.currentRouteName').readOnly(),

  transitionTo() {
    return this.get('router').transitionTo(...arguments);
  }

});
