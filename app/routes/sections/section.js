import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.get('store.db.main').first({
      model: 'section',
      ddoc: 'section',
      view:'by-slug',
      key: params.section_slug
    });
  },

  serialize(model) {
    return {
      section_slug: model.get('slug')
    };
  }

});
