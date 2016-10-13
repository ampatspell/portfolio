import Ember from 'ember';
import { prefix, type, attr, hasMany } from 'sofa';
import Section from './section';

const {
  RSVP: { all }
} = Ember;

export default Section.extend({

  id: prefix('section:'),
  type: type('section:category'),

  sections: hasMany('section', { inverse: 'category', persist: false }),

  isCategory: true,

  deleteNested() {
    return all(this.get('sections').map(section => section.deleteNested())).then(() => {
      return this.delete();
    });
  }

});
