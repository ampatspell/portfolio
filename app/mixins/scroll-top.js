import Ember from 'ember';

const {
  on,
  $
} = Ember;

export default Ember.Mixin.create({

  shouldScrollTop: true,

  scrollTop: on('didInsertElement', function() {
    if(!this.get('shouldScrollTop')) {
      return;
    }
    let current = this.get('element');
    while(current) {
      let el = $(current);
      el.scrollTop(0);
      current = current.parentElement;
    }
  }),

});
