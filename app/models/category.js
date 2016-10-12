import { prefix, type, attr, hasMany } from 'sofa';
import Section from './section';

export default Section.extend({

  id: prefix('section:'),
  type: type('section:category'),

  sections: hasMany('section', { inverse: 'category', persist: false }),

  isCategory: true,

});
