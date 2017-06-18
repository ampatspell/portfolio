import Ember from 'ember';
import ObserveModelDelete from 'portfolio/mixins/route-observe-model-delete';
import ObserveSectionDelete from 'portfolio/mixins/route-observe-section-delete';

export default Ember.Route.extend(
  ObserveModelDelete,
  ObserveSectionDelete, {

  indexRouteName: 'backend.sections',

  model(params) {
    return this.get('store.db.main').load('section', params.section_id).then(section => {
      return section.loadNested().then(() => section);
    });
  }

});
