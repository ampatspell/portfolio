import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.ArrayProxy.extend({

  collection: null,
  visible: null,

  content: computed('visible', 'collection.@each.{category,position,visible}', function() {
    let array = this.get('collection').filterBy('category', null).sortBy('position');
    let visible = this.get('visible');
    if(visible !== null) {
      array = array.filterBy('visible', visible);
    }
    return array;
  }).readOnly()

});
