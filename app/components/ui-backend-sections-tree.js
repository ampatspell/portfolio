import Ember from 'ember';

const {
  computed,
  RSVP: { all }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-tree' ],

  roots: computed('sections.@each.{category,position}', function() {
    return this.get('sections').filterBy('category', null).sortBy('position');
  }).readOnly(),

  actions: {
    reorder(model, pos, relative) {
      let category = relative.get('category');
      let array = category ? category.get('sections').sortBy('position') : this.get('roots');

      array.removeObject(model);

      let idx = array.indexOf(relative);
      if(pos === 'before') {
        array.insertAt(idx, model);
      } else {
        array.insertAt(idx + 1, model);
      }

      array.forEach((model, idx) => {
        model.set('position', idx);
      });

      model.set('category', category);

      model.save().then(() => {
        return all(array.map(model => model.save()));
      });
    }
  }

});
