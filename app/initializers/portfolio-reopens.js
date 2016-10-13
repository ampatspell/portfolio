import Ember from 'ember';

Ember.Component.reopen({
  transitionTo() {
    return this.get('router').transitionTo(...arguments);
  }
});

export default {
  name: 'portfolio:reopens',
  initialize() {}
};
