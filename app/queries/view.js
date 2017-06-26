import Ember from 'ember';
import { Query } from 'sofa';

const {
  computed
} = Ember;

export default opts => {
  let { ddoc, view } = opts;
  return Query.extend({
    find: computed(function() {
      return { ddoc, view };
    })
  });
}
