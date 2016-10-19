import Ember from 'ember';

export function uiNot(params) {
  return !params[0];
}

export default Ember.Helper.helper(uiNot);
