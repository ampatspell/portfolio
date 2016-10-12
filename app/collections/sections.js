import Ember from 'ember';
import { Collection } from 'sofa';
import Section from '../models/section';

const {
  computed
} = Ember;

export default Collection.extend({

  modelName: 'section',
  queryName: 'all-sections',

});
