import Ember from 'ember';

const isDeleted = 'isDeleted';

export default Ember.Mixin.create({

  startObservingModelDelete(model) {
    model.addObserver(isDeleted, this, 'onModelDeleted');
  },

  stopObservingModelDelete(model) {
    model.removeObserver(isDeleted, this, 'onModelDeleted');
  },

  setupController(controller, model) {
    this.startObservingModelDelete(model);
    return this._super(...arguments);
  },

  resetController(controller) {
    let model = controller.get('model');
    this.stopObservingModelDelete(model);
    return this._super(...arguments);
  },

  onModelDeleted(model) {
  }

});
