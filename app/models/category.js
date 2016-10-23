import { prefix, type, attr } from 'sofa';
import Section from './section';

export default Section.extend({

  id: prefix('section:'),
  type: type('section:category'),

  open: attr('boolean'),

});
