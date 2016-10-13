import Ember from 'ember';
import { Model, prefix, belongsTo } from 'sofa';

const {
  RSVP: { all }
} = Ember;

export default Model.extend({

  id: prefix(),
  gallery: belongsTo('gallery'),

});
