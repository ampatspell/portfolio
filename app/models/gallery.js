import { prefix, type, attr, hasMany } from 'sofa';
import Section from './section';

export default Section.extend({

  id: prefix('section:'),
  type: type('section:gallery'),

  images: hasMany('gallery-image', { query: 'gallery-images' }),

  deleteNested() {
    return this.get('images.promise').then(images => {
      return all(images.map(image => image.delete()));
    }).then(() => {
      return this.delete();
    });
  }

});
