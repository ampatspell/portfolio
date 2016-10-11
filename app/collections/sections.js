import Ember from 'ember';
import { Collection } from 'sofa';
import Section from '../models/section';

const {
  computed
} = Ember;

export default Collection.extend({

  // TODO: collection.modelName should take base class
  modelName: null,

  match: computed('models.[]', function() {
    return this.get('models').filter(model => {
      return Section.detectInstance(model);
    });
  }).readOnly(),

});
