import Ember from 'ember';
import { Query } from 'sofa';

const {
  computed
} = Ember;

export default opts => {
  let { ddoc, view, key } = opts;
  return Query.extend({
    find: computed(key, function() {
      let value = this.get(key);
      return { ddoc, view, key: value };
    })
  });
}
