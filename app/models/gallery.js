import Ember from 'ember';
import { prefix, type, attr, hasMany } from 'sofa';
import Section from './section';

const {
  RSVP: { all },
  computed: { sort }
} = Ember;

export default Section.extend({

  id: prefix('section:'),
  type: type('section:gallery'),

  images: hasMany('gallery-image', { inverse: 'gallery', query: 'gallery-images' }),

  sortedImagesDesc: [ 'position' ],
  sortedImages: sort('images', 'sortedImagesDesc'),

  isGallery: true,

  deleteNested() {
    return this.get('images.promise').then(images => {
      return all(images.map(image => image.delete()));
    }).then(() => {
      return this.delete();
    });
  }

});
