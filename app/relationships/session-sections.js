import Ember from 'ember';
import { Relationship } from 'sofa';

const {
  computed,
  getOwner
} = Ember;

const Root = Ember.ArrayProxy.extend({

  relationship: null,
  visible: null,

  content: computed('visible', 'relationship.@each.{category,position,visible}', function() {
    let array = this.get('relationship').filterBy('category', null).sortBy('position');
    let visible = this.get('visible');
    if(visible !== null) {
      array = array.filterBy('visible', visible);
    }
    return array;
  }).readOnly()

});

const root = visible => {
  return computed(function() {
    let relationship = this;
    return Root.create({ relationship, visible });
  }).readOnly();
};

export default Relationship.extend({

  query: { name: 'view', ddoc: 'section', view: 'all' },

  sortedVisibleRootSections: root(true),
  sortedRootSections:        root(null),

});
