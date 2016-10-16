import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({

  confirm: service(),

  model() {
    return this.get('store.db.main.sections.promise');
  },

  // actions: {
  //   selectSection(section) {
  //     if(section.get('isNew')) {
  //       return;
  //     }
  //     this.transitionTo('backend.sections.section', section);
  //   },
  //   deselectSection() {
  //     this.transitionTo('backend.sections');
  //   },
  //   newSection(category) {
  //     if(category) {
  //       this.transitionTo('backend.sections.section.new', category);
  //     } else {
  //       this.transitionTo('backend.sections.new');
  //     }
  //   },
  //   editSection(section) {
  //     this.transitionTo('backend.sections.section.edit', section);
  //   },
  //   saveSection(section) {
  //     section.save().then(() => {
  //       this.transitionTo('backend.sections.section', section);
  //     });
  //   },
  //   deleteSection(section) {
  //     this.get('confirm').show(
  //       'Delete section',
  //       'Are you sure you want to delete this section?',
  //       'Delete'
  //     ).then(() => section.deleteNested()).then(() => {
  //       this.transitionTo('backend.sections');
  //     });
  //   }
  // }

});
