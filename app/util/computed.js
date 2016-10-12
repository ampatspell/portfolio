import Ember from 'ember';

const {
  computed
} = Ember;

export const fallback = (key, defaultValue) => {
  return computed(key, function() {
    return this.get(key) || defaultValue;
  }).readOnly();
};
