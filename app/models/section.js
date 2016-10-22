import Ember from 'ember';
import { Model, prefix, attr, belongsTo, hasMany } from 'sofa';
import id from '../util/make-id';
import slugify from '../util/slugify';
import { fallback } from '../util/computed';

const {
  computed: { sort, filterBy },
  RSVP: { resolve, all },
  inject: { service },
  computed
} = Ember;

export default Model.extend({

  id: prefix(),

  position: attr('integer'),
  slug: attr('string'),
  visible: attr('boolean'),

  category: belongsTo('section', { inverse: 'sections', polymorphic: true }),

  sections: hasMany('section', { inverse: 'category', persist: false }),
  sortedSectionsDesc: [ 'position' ],
  sortedSections: sort('sections', 'sortedSectionsDesc'),
  sortedVisibleSections: filterBy('sortedSections', 'visible', true),

  pageTitle: attr('string'),
  pageTitle_: fallback('pageTitle', 'Untitled'),

  menuTitle: attr('string'),
  menuTitle_: fallback('menuTitle', 'pageTitle', 'Untitled'),

  slugifiedTitle: computed('menuTitle_', function() {
    return slugify(this.get('menuTitle_'));
  }).readOnly(),

  createdAt: attr('date'),
  updatedAt: attr('date'),

  backend: service(),
  modelScreenName: computed(function() {
    let modelName = this.get('modelName');
    return this.get('backend').sectionModelByName(modelName).title;
  }).readOnly(),

  isIndex: computed('slug', 'category', function() {
    return this.get('slug') === 'index' && !this.get('category');
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

  deleteNested() {
    return all(this.get('sections').map(section => section.deleteNested())).then(() => {
      return this.delete();
    });
  },

  loadNested() {
    return resolve();
  }

});
