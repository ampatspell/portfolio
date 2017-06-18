import Ember from 'ember';
import ObservePropertiesMixin from 'portfolio/mixins/route-observe-properties';
import ObserveModelDeleteMixin from 'portfolio/mixins/route-observe-model-delete';
import ObserveSectionDeleteMixin from 'portfolio/mixins/route-observe-section-delete';
import { Error } from 'sofa';

const {
  RSVP: { resolve, reject }
} = Ember;

const notfound = () => {
  return reject(new Error({ error: 'not_found', reason: 'missing' }));
};

export default Ember.Route.extend(
  ObservePropertiesMixin,
  ObserveModelDeleteMixin,
  ObserveSectionDeleteMixin, {

  _find(path) {
    let sections = this.get('store.db.main.sections.sortedRootSections');
    let components = path.trim().split('/');

    let parent = null;
    let array = sections;

    let key;
    do {
      key = components.shift();
      if(!key) {
        return parent;
      }
      if(!array) {
        return;
      }
      parent = array.findBy('slug', key);
      if(!parent) {
        return;
      }
      array = parent.get('sections');
    } while(true);
  },

  model(params) {
    let model = this._find(params.path);
    if(model) {
      return model;
    }
    return notfound();
  },

  serialize(model) {
    return {
      path: model.get('path')
    };
  },

  observeProperties: [ 'path' ],

  onObservedPropertiesDidChange(model, key) {
    this.replaceWith(this.routeName, model.get('path'));
  }

});
