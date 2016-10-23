import Ember from 'ember';

const {
  computed,
  computed: { alias }
} = Ember;

export default Ember.Component.extend({

  session: alias('store.session'),

  result: null,

  resultString: computed('result', function() {
    let result = this.get('result');
    if(result.toJSON) {
      result = result.toJSON();
    }
    return JSON.stringify(result, null, 2);
  }).readOnly(),

  actions: {
    perform() {
      this.perform();
    }
  },

  perform() {
    let result = [];
    let db = this.get('store.db.main');
    result.push({ task: 'info', json: { url: db.get('documents.url') } });
    this.get('session').save().then(() => {
      return db.get('documents.database').create({ optional: true }).then(json => result.push({ task: 'create database', json }));
    }).then(() => {
      return db.insertDesignDocuments().then(json => result.push({ task: 'insert design documents', json }));
    }).then(() => {
      this.setProperties({
        done: true,
        result
      });
    }, err => {
      this.setProperties({
        done: false,
        result: err
      });
    });
  }

});
