import Ember from 'ember';

const {
  computed,
  getOwner
} = Ember;

const routes = [
  { icon: 'eye',       route: 'index' },
  { icon: 'list',      route: 'backend.content' },
  { icon: 'gear',      route: 'backend.settings' },
  { icon: 'power-off', route: 'session.delete' }
];

const sections = [
  'placeholder'
];

export default Ember.Service.extend({

  navigationItems: computed(function() {
    const Item = getOwner(this).lookup('services/backend/navigation-item:main');
    return Ember.A(routes).map(props => {
      return Item.create(props);
    });
  }).readOnly(),

  sectionModelNames: computed(function() {
    return Ember.A(sections);
  }).readOnly(),

});
