import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store.db.main.allSections.promise');
  },

  actions: {
    selectSection(section) {
      if(section.get('isNew')) {
        return;
      }
      this.transitionTo('backend.sections.section', section);
    },
    deselectSection() {
      this.transitionTo('backend.sections');
    },
    newSection(category) {
      if(category) {
        this.transitionTo('backend.sections.section.new', category);
      } else {
        this.transitionTo('backend.sections.new');
      }
    },
    editSection(section) {
      this.transitionTo('backend.sections.section.edit', section);
    },
    saveSection(section) {
      section.save().then(() => {
        this.transitionTo('backend.sections.section', section);
      });
    },
    deleteSection(section) {
      section.delete().then(() => {
        this.transitionTo('backend.sections');
      });
    }
  }

});
