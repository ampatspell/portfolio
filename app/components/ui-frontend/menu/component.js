import Ember from 'ember';

const {
  inject: { service },
  computed: { alias },
  computed
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [':ui-frontend-menu'],

  backend: service(),

  title: alias('backend.title'),

  sections: computed('store.db.main.sections.sortedVisibleRootSections.@each.slug', function() {
    return this.get('store.db.main.sections.sortedVisibleRootSections').filter(section => !section.get('isIndex'));
  }),

});
