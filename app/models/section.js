import Ember from 'ember';
import { Model, prefix, attr, belongsTo } from 'sofa';
import id from '../util/make-id';
import { fallback } from '../util/computed';

const {
  inject: { service },
  computed
} = Ember;

export default Model.extend({

  id: prefix(),

  slug: attr('string'),
  visible: attr('boolean'),
  category: belongsTo('category', { inverse: 'sections' }),

  title: attr('string'),
  title_: fallback('title', 'Untitled'),

  createdAt: attr('date'),
  updatedAt: attr('date'),

  backend: service(),
  modelScreenName: computed(function() {
    let modelName = this.get('modelName');
    return this.get('backend').sectionModelByName(modelName).title;
  }).readOnly(),

  path: computed('slug', function() {
    let slug = this.get('slug');
    if(!slug) {
      return;
    }
    return `/${slug}`;
  }).readOnly(),

  isCategory: false,

  willCreate() {
    this.set('id', id(12));
    let now = new Date();
    this.setProperties({
      createdAt: now,
      updatedAt: now
    });
  },

  willSave() {
    let now = new Date();
    this.set('updatedAt', now);
  },

});
