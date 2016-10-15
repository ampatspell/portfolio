import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-tree' ],

  roots: computed('sections.@each.{category,position}', function() {
    return this.get('sections').filterBy('category', null).sortBy('position');
  }).readOnly(),

  actions: {
    reorder(model, pos, relative) {
      console.log(model.get('title_'), pos, relative.get('title_'));

      let category = relative.get('category');
      let array = category ? category.get('sections').sortBy('position') : this.get('roots');

      array.removeObject(model);

      console.log('before', array.mapBy('title_'));

      let idx = array.indexOf(relative);
      console.log('idx', idx);

      if(pos === 'before') {
        array.insertAt(idx, model);
      } else {
        array.insertAt(idx + 1, model);
      }

      array.forEach((model, idx) => {
        model.set('position', idx);
      });

      model.set('category', category);

      console.log('after', array.mapBy('title_'));
    }
  }

});
