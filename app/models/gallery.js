import Ember from 'ember';
import { prefix, type, attr, hasMany } from 'sofa';
import Section from './section';

const {
  RSVP: { all }
} = Ember;

export default Section.extend({

  id: prefix('section:'),
  type: type('section:gallery'),

  images: hasMany('gallery-image', { inverse: 'gallery', query: 'gallery-images' }),

  deleteNested() {
    return this.get('images.promise').then(images => {
      return all(images.map(image => image.delete()));
    }).then(() => {
      return this.delete();
    });
  }

});
