import Ember from 'ember';

const {
  computed
} = Ember;

export const fallback = (...args) => {
  let defaultValue = args.pop();
  return computed(...args, function() {
    for(let i = 0; i < args.length; i++) {
      let key = args[i];
      let value = this.get(key);
      if(value) {
        return value;
      }
    }
    return defaultValue;
  }).readOnly();
};

export const array = () => {
  return computed(function() {
    return Ember.A();
  }).readOnly();
};
