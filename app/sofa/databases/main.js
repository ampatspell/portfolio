import Ember from 'ember';
import { Database } from 'sofa';
import design from '../../design';

const {
  computed,
  RSVP: { all }
} = Ember;

const collection = name => {
  return computed(function() {
    return this.collection(name);
  }).readOnly();
};

export default Database.extend({

  sections: collection('sections'),

  insertDesignDocuments() {
    let promises = [];
    for(let name in design) {
      let ddoc = design[name];
      promises.push(this.get('documents.design').save(name, ddoc));
    }
    return all(promises);
  }

});