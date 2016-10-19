import Ember from 'ember';

export function uiJoin(params, hash) {
  let arr = [];
  for(let i = 0; i < params.length; i++) {
    let param = params[i];
    if(param === null || param === undefined) {
      continue;
    }
    arr.push(param);
  }
  return params.join(hash.delimiter || '');
}

export default Ember.Helper.helper(uiJoin);
