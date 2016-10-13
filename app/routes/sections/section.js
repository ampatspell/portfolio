import Ember from 'ember';
import { Error } from 'sofa';

const {
  RSVP: { reject }
} = Ember;

const notfound = () => {
  return reject(new Error({ error: 'not_found', reason: 'missing' }));
};

export default Ember.Route.extend({

  _find(path) {
    let sections = this.get('store.db.main.allSections');
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
  }

});
