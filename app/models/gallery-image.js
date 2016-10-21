import Ember from 'ember';
import { Model, prefix, attr, belongsTo } from 'sofa';
import makeid from '../util/make-id';

const {
  computed
} = Ember;

export default Model.extend({

  id: prefix(),
  position: attr('integer'),
  filename: attr('string'),
  description: attr('string'),

  gallery: belongsTo('gallery', { inverse: 'images' }),

  filenameWithoutExtension: computed('filename', function() {
    let filename = this.get('filename');
    if(!filename) {
      return;
    }
    let idx = filename.lastIndexOf('.');
    return filename.substring(0, idx);
  }).readOnly(),

  willCreate() {
    let gallery = this.get('gallery.id');
    let id = makeid(12);
    this.set('id', `${gallery}:${id}`);
  },

});
