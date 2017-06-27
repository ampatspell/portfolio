import Ember from 'ember';
import { Database } from 'sofa';
import design from '../../design';

const {
  computed,
  RSVP: { all }
} = Ember;

const session = key => {
  if(key) {
    return computed(key, function() {
      return this.get(`session.${key}`);
    }).readOnly();
  } else {
    return computed(function() {
      return this.model('session', { id: 'singleton' });
    }).readOnly();
  }
}

export default Database.extend({

  session: session(),

  sections: session('sections'), // collection('sections'),

  insertDesignDocuments() {
    let promises = [];
    for(let name in design) {
      let ddoc = design[name];
      promises.push(this.get('documents.design').save(name, ddoc));
    }
    return all(promises);
  },

  deselectSections() {
    this.get('sections').forEach(model => {
      model.set('isOpen', false);
    });
  },

  didSelectSection(model) {
    let models = [...model.ancestors(), model];
    this.get('sections').forEach(model => {
      model.set('isOpen', models.indexOf(model) !== -1);
    });
  }

});
