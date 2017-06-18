import Ember from 'ember';
import ObservePropertiesMixin from 'portfolio/mixins/route-observe-properties';
import ObserveModelDeleteMixin from 'portfolio/mixins/route-observe-model-delete';
import { Error } from 'sofa';

const {
  RSVP: { resolve, reject }
} = Ember;

const notfound = () => {
  return reject(new Error({ error: 'not_found', reason: 'missing' }));
};

export default Ember.Route.extend(
  ObservePropertiesMixin,
  ObserveModelDeleteMixin, {

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
      window.model = model;
      return model;
    }
    return notfound();
  },

  replaceWithParent(model) {
    let parent = model.get('category');
    if(!parent) {
      this.replaceWith('index');
    } else {
      this.replaceWith(this.routeName, parent);
    }
  },

  afterModel(model) {
    return resolve(this._super(...arguments)).then(() => {
      if(model.get('isDeleted')) {
        this.replaceWithParent(model);
      }
    });
  },

  serialize(model) {
    return {
      path: model.get('path')
    };
  },

  observeProperties: [ 'path' ],

  onObservedPropertiesDidChange(model, key) {
    this.replaceWith(this.routeName, model.get('path'));
  },

  onModelDeleted(model) {
    this.replaceWithParent(model);
  }

});
