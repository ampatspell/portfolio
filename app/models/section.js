import Ember from 'ember';
import { Model, prefix, attr, belongsTo } from 'sofa';
import id from '../util/make-id';
import slugify from '../util/slugify';
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

  slugifiedTitle: computed('title', function() {
    let title = this.get('title');
    return slugify(title);
  }).readOnly(),

  createdAt: attr('date'),
  updatedAt: attr('date'),

  backend: service(),
  modelScreenName: computed(function() {
    let modelName = this.get('modelName');
    return this.get('backend').sectionModelByName(modelName).title;
  }).readOnly(),

  path: computed('slug', 'category.path', function() {
    let slug = this.get('slug');
    if(!slug) {
      return;
    }
    let category = this.get('category');
    if(category) {
      let c = category.get('path');
      if(!c) {
        return;
      }
      return `${c}/${slug}`;
    }
    return slug;
  }).readOnly(),

  isCategory: false,

  willCreate() {
    this.set('id', id(12));
    let now = new Date();
    this.setProperties({
      createdAt: now,
      updatedAt: now,
      slug: this.get('slugifiedTitle')
    });
  },

  willSave() {
    let now = new Date();
    this.setProperties({
      updatedAt: now,
      slug: this.get('slugifiedTitle')
    });
  },

});
