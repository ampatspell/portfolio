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

export default Ember.Service.extend({

  items: computed(function() {
    const Item = getOwner(this).lookup('services/backend-navigation/item:main');
    return Ember.A(routes).map(props => {
      return Item.create(props);
    });
  }).readOnly()

});
