import Ember from 'ember';

export function uiBlank(params) {
  let value = params[0];
  if(typeof value === 'string') {
    return value.trim().length === 0;
  }
  return !value;
}

export default Ember.Helper.helper(uiBlank);
