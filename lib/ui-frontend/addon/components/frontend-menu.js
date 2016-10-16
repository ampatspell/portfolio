import Ember from 'ember';
import layout from '../templates/components/frontend-menu';

const {
  inject: { service },
  computed: { alias }
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':frontend-menu'],
  layout,

  backend: service(),

  title: alias('backend.title'),
  sections: alias('store.db.main.sections')

});
