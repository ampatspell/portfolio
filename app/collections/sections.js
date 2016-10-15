import Ember from 'ember';
import { Collection } from 'sofa';

const {
  computed,
  getOwner
} = Ember;

const root = visible => {
  return computed(function() {
    let collection = this;
    return getOwner(this).lookup('collection:root-sections').create({ collection, visible });
  }).readOnly();
};

export default Collection.extend({

  modelName: 'section',
  queryName: 'sections',

  sortedVisibleRootSections: root(true),
  sortedRootSections:        root(null),

});
