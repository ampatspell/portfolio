import Ember from 'ember';

const {
  A
} = Ember;

/*

import ObservePropertiesMixin from 'portfolio/mixins/route-observe-properties';

export default Ember.Route.extend(ObservePropertiesMixin, {

  observeProperties: [ 'path' ],

  onObservedPropertiesDidChange(model, key) {
    this.replaceWith(this.routeName, model.get('path'));
  }

});

*/

export default Ember.Mixin.create({

  observeProperties: null,

  startObservingProperties(model) {
    let props = A(this.get('observeProperties'));
    props.forEach(prop => {
      model.addObserver(prop, this, 'onObservedPropertiesDidChange');
    });
  },

  stopObservingProperties(model) {
    let props = A(this.get('observeProperties'));
    props.forEach(prop => {
      model.removeObserver(prop, this, 'onObservedPropertiesDidChange');
    });
  },

  setupController(controller, model) {
    this.startObservingProperties(model);
    return this._super(...arguments);
  },

  resetController(controller) {
    let model = controller.get('model');
    this.stopObservingProperties(model);
    return this._super(...arguments);
  },

  onObservedPropertiesDidChange(model, key) {
  }

});
