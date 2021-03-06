import Ember from 'ember';

const {
  RSVP: { all }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-tree' ],

  sections: null,

  actions: {
    new(parent) {
      if(this.attrs.new) {
        this.attrs.new(parent);
      }
    },
    select(model) {
      if(this.attrs.select) {
        this.attrs.select(model);
      }
    },
    reorder(model, pos, relative) {
      let category = relative.get('category');

      let array;
      if(category) {
        array = category.get('sections').sortBy('position');
      } else {
        array = this.get('sections.sortedRootSections').map(model => model);
      }

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
