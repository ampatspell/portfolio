import Ember from 'ember';
import { prefix, type } from 'sofa';
import Section from './section';

export default Section.extend({

  id: prefix('section:'),
  type: type('section:category'),

  isCategory: true

});
