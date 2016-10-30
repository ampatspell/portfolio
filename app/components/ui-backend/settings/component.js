import Ember from 'ember';
import createMasterDetailClass from '../-master-detail-class';

const MasterDetailClass = createMasterDetailClass('backend.settings.index');

const routes = [
  { title: 'About',     route: 'backend.settings.about' },
  { title: 'Changelog', route: 'backend.settings.changelog' }
];

export default Ember.Component.extend(MasterDetailClass, {
  classNameBindings: [ ':ui-backend-settings' ],

  routes,

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    }
  }

});
