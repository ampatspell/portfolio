import Ember from 'ember';
import { Database, transient } from 'sofa';
import design from '../../design';

const {
  computed: { reads },
  RSVP: { all }
} = Ember;

const session = key => {
  return reads(`session.${key}`);
}

export default Database.extend({

  session: transient('session', 'singleton'),
  sections: session('sections'),

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
