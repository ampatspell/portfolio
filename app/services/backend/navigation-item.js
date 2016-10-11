import Ember from 'ember';

const {
  inject: { service },
  computed
} = Ember;

export default Ember.Object.extend({

  router: service(),

  icon: null,
  route: null,

  selected: computed('route', 'router.currentRouteName', function() {
    return this.get('router.currentRouteName').startsWith(this.get('route'));
  }),

});
