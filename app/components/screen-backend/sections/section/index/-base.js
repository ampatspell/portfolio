import Base from '../-base';

const {
  inject: { service }
} = Ember;

export default Base.extend({

  confirm: service(),

  actions: {
    edit() {
      this.transitionTo('backend.sections.section.edit', this.get('section'));
    },
    delete() {
      let section = this.get('section');
      this.get('confirm').show(
        'Delete section',
        'Are you sure you want to delete this section?',
        'Delete'
      ).then(() => section.deleteNested()).then(() => {
        this.transitionTo('backend.sections');
      });
    }
  }

});
