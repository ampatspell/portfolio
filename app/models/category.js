import Ember from 'ember';
import { prefix, type, hasMany } from 'sofa';
import Section from './section';

const {
  computed: { sort, filterBy },
  RSVP: { all }
} = Ember;

export default Section.extend({

  id: prefix('section:'),
  type: type('section:category'),

  sections: hasMany('section', { inverse: 'category', persist: false }),

  sortedSectionsDesc: [ 'position' ],
  sortedSections: sort('sections', 'sortedSectionsDesc'),

  sortedVisibleSections: filterBy('sortedSections', 'visible', true),

  isCategory: true,

  deleteNested() {
    return all(this.get('sections').map(section => section.deleteNested())).then(() => {
      return this.delete();
    });
  }

});
