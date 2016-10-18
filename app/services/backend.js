import Ember from 'ember';
import config from '../config';

const {
  computed,
  getOwner
} = Ember;

const {
  title
} = config;

const routes = [
  { icon: 'eye',       route: 'index' },
  { icon: 'list',      route: 'backend.sections' },
  { icon: 'gear',      route: 'backend.settings' },
  { icon: 'power-off', route: 'session.delete' }
];

const sections = [
  { name: 'category', title: 'Category', description: 'Section group' },
  { name: 'gallery',  title: 'Gallery',  description: 'Image gallery' },
  { name: 'text',     title: 'Page',     description: 'Single markdown formatted text page' },
  { name: 'link',     title: 'Link',     description: 'External url' },
];

export default Ember.Service.extend({

  title,

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
