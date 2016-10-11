import { prefix, type, attr } from 'sofa';
import Section from './section';

export default Section.extend({

  id: prefix('section:placeholder:'),
  type: type('placeholder'),

  body: attr('string')

});
