import Ember from 'ember';
import environment from '../config/environment';

const {
  computed,
  getOwner,
  merge
} = Ember;

const routes = [
  { icon: 'eye',       route: 'index' },
  { icon: 'list',      route: 'backend.sections' },
  { icon: 'gear',      route: 'backend.settings' },
  { icon: 'power-off', route: 'session.delete' }
];

const galleryTypes = [
  { name: 'vertical', title: 'Vertical', description: 'Stack images vertically' },
  { name: 'single',   title: 'Singles',  description: 'One image at a time' },
];

const defaultGalleryType = galleryTypes[0].name;

const sections = [
  { name: 'category',  title: 'Category',  description: 'Section group' },
  { name: 'gallery',   title: 'Gallery',   description: 'Image gallery', defaults: { showImageFilenames: false, galleryType: defaultGalleryType } },
  { name: 'text',      title: 'Page',      description: 'Single markdown formatted text page' },
  { name: 'link',      title: 'Link',      description: 'External url' },
  { name: 'delimiter', title: 'Delimiter', description: 'Blank menu line', defaults: { pageTitle: 'Delimiter' } },
];

const sectionProps = (props) => {
  props.defaults = merge(props.defaults || {}, { open: true });
  return props;
};

export default Ember.Service.extend({

  title: environment.portfolio.title,

  navigationItems: computed(function() {
    const Item = getOwner(this).factoryFor('services/backend/navigation-item:main');
    return Ember.A(routes).map(props => Item.create(props));
  }).readOnly(),

  sectionModels: computed(function() {
    const Model = getOwner(this).factoryFor('services/backend/section:main');
    return Ember.A(sections).map(props => Model.create(sectionProps(props)));
  }).readOnly(),

  sectionModelByName(name) {
    return this.get('sectionModels').findBy('name', name);
  },

  galleryTypes: computed(function() {
    const Type = getOwner(this).factoryFor('services/backend/gallery-type:main');
    return Ember.A(galleryTypes).map(props => Type.create(props));
  }).readOnly(),

  galleryTypeByName(name) {
    return this.get('galleryTypes').findBy('name', name);
  }

});
