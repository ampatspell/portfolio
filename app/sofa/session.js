import Ember from 'ember';
import { Session } from 'sofa';
import environment from '../config/environment';

const {
  computed
} = Ember;

const admins = environment.portfolio.admins;

export default Session.extend({

  adminRole: computed('roles', function() {
    return Ember.A(this.get('roles')).find(role => {
      return admins.indexOf(role) !== -1;
    });
  }).readOnly(),

  isAdmin: computed('isAuthenticated', 'adminRole', function() {
    if(!this.get('isAuthenticated')) {
      return false;
    }
    if(!this.get('adminRole')) {
      return false;
    }
    return true;
  }),

});
