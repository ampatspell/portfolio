import Ember from 'ember';
import { Collection } from 'sofa';

const {
  computed
} = Ember;

export default Collection.extend({

  modelName: 'section',
  queryName: 'visible-sections',

  match: computed('models.@each.visible', function() {
    return this.get('models').filterBy('visible', true);
  })

});
