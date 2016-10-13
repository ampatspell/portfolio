import Ember from 'ember';
import { Model, prefix, attr, belongsTo } from 'sofa';
import makeid from '../util/make-id';

const {
  RSVP: { all }
} = Ember;

export default Model.extend({

  id: prefix(),
  position: attr('integer'),
  filename: attr('string'),

  gallery: belongsTo('gallery', { inverse: 'images' }),

  willCreate() {
    let gallery = this.get('gallery.id');
    let id = makeid(12);
    this.set('id', `${gallery}:${id}`);
  },

});
