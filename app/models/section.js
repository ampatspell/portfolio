import { Model, attr } from 'sofa';
import id from '../util/make-id';

export default Model.extend({

  slug: attr('string'),
  title: attr('string'),

  createdAt: attr('date', { key: 'created_at' }),
  updatedAt: attr('date', { key: 'updated_at' }),

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
  }

});
