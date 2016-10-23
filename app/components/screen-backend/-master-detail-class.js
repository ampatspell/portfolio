import Ember from 'ember';

const {
  inject: { service },
  computed
} = Ember;

export default routeName => {
  return Ember.Mixin.create({

    router: service(),

    masterDetailClass: computed('router.currentRouteName', function() {
      return this.get('router.currentRouteName') === routeName ? 'master' : 'detail';
    }).readOnly()

  });
}
