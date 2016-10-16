import { prefix, type, attr } from 'sofa';
import Section from './section';

export default Section.extend({

  id: prefix('section:'),
  type: type('section:link'),

  url: attr('string'),
  tab: attr('boolean'),

});
