import Ember from 'ember';
import { prefix, type, attr, hasMany } from 'sofa';
import Section from './section';

const {
  RSVP: { all },
  computed: { sort },
  inject: { service },
  computed
} = Ember;

const galleryTypeByName = prop => {
  return computed(prop, function() {
    let name = this.get(prop);
    if(!name) {
      return;
    }
    return this.get('backend').galleryTypeByName(name);
  }).readOnly();
};

export default Section.extend({

  backend: service(),

  id: prefix('section:'),
  type: type('section:gallery'),
  description: attr('string'),

  galleryType: attr('string'),
  galleryTypeModel: galleryTypeByName('galleryType'),

  showImageFilenames: attr('boolean'),

  images: hasMany('gallery-image', {
    inverse: 'gallery',
    query: {
      name: 'view-with-key',
      ddoc: 'gallery-image',
      view: 'by-gallery',
      key:  'model.docId'
    }
  }),

  sortedImagesDesc: [ 'position' ],
  sortedImages: sort('images', 'sortedImagesDesc'),

  isGallery: true,
  hasSummary: true,

  deleteNested() {
    const _super = this._super;
    return this.get('images.promise').then(images => {
      return all(images.map(image => image.delete()));
    }).then(() => {
      return _super.call(this);
    });
  },

  loadNested() {
    return this.get('images.promise');
  }

});
