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
  { name: 'placeholder', title: 'Placeholder', description: 'Use this to mark page as coming soon' }
];

export default Ember.Service.extend({

  navigationItems: computed(function() {
    const Item = getOwner(this).lookup('services/backend/navigation-item:main');
    return Ember.A(routes).map(props => {
      return Item.create(props);
    });
  }).readOnly(),

  sectionModels: computed(function() {
    return Ember.A(sections);
  }).readOnly(),

  sectionModelByName(name) {
    return this.get('sectionModels').findBy('name', name);
  }

});
