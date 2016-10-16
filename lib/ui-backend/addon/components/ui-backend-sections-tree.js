import Ember from 'ember';
import layout from '../templates/components/ui-backend-sections-tree';

const {
  RSVP: { all },
  copy
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ ':ui-backend-tree' ],
  layout,

  actions: {
    new() {
      if(this.attrs.new) {
        this.attrs.new();
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
