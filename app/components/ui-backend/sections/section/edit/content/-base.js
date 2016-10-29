import Base from '../../-base';

export default Base.extend({
  classNameBindings: [ ':ui-backend-sections-section-edit-content' ],

  actions: {
    cancel() {
      if(this.attrs.cancel) {
        this.attrs.cancel();
      }
    },
    save() {
      return this.save();
    }
  },

  save() {
    return this.get('section').save().then(section => {
      this.transitionTo('backend.sections.section', section);
    });
  }

});
