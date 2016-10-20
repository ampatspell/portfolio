import Ember from 'ember';

const {
  merge
} = Ember;

export default Ember.Object.extend({

  name: null,
  defaults: null,

  mergeDefaults(props) {
    let defaults = this.get('defaults');
    if(defaults) {
      props = merge(props, defaults);
    }
    return merge({ visible: true }, props);
  }

});
