import Ember from 'ember';

export function uiEq(params) {
  let [ a, b ] = params;
  return a === b;
}

export default Ember.Helper.helper(uiEq);
