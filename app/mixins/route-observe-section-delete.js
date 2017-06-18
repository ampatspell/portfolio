import Ember from 'ember';

const {
  RSVP: { resolve }
} = Ember;

/*
import ObserveModelDeleteMixin from 'portfolio/mixins/route-observe-model-delete';
import ObserveSectionDeleteMixin from 'portfolio/mixins/route-observe-section-delete';

export default Ember.Route.extend(
  ObserveModelDeleteMixin,
  ObserveSectionDeleteMixin, {

  indexRouteName: 'backend.sections'

  ...

});
*/

export default Ember.Mixin.create({

  indexRouteName: 'index',

  replaceWithParent(model) {
    let parent = model.get('category');
    if(!parent) {
      this.replaceWith(this.get('indexRouteName'));
    } else {
      this.replaceWith(this.routeName, parent);
    }
  },

  afterModel(model) {
    return resolve(this._super(...arguments)).then(() => {
      if(model.get('isDeleted')) {
        this.replaceWithParent(model);
      }
    });
  },

  onModelDeleted(model) {
    this.replaceWithParent(model);
  }

});
