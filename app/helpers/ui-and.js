import Ember from 'ember';

export function uiAnd(params) {
  for(let i = 0; i < params.length; i++) {
    if(!params[i]) {
      return false;
    }
  }
  return true;
}

export default Ember.Helper.helper(uiAnd);
