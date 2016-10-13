import Ember from 'ember';
import { Query } from 'sofa';

const {
  computed
} = Ember;

export default Query.extend({

  find: computed('model.docId', function() {
    let key = this.get('model.docId');
    return { ddoc: 'gallery-image', view: 'by-gallery', key };
  }),

});
