import Ember from 'ember';

const {
  computed,
  inject: { service },
  $
} = Ember;

const css = (e, name) => {
  let value = e.css(name);
  if(value && value.indexOf('px') !== -1) {
    return parseInt(value);
  }
  return 0;
};

const subtractPadding = (size) => {
  let { width, height } = size;
  let el = $('#content-padding');
  if(el) {
    width  -= css(el, 'padding-left') + css(el, 'padding-right');
    height -= css(el, 'padding-top') + css(el, 'padding-bottom');
  }
  return { width, height };
};

const calculateMaxWidth = selector => {
  if(!selector) {
    return;
  }
  let el = $(selector);
  if(!el) {
    return;
  }
  let max = css(el, 'max-width');
  if(!max) {
    return;
  }
  return max - css(el, 'padding-left') - css(el, 'padding-right');
};

export default Ember.Mixin.create({

  window: service(),
  maxWidthSelector: null,

  size: computed('window.size', 'maxWidthSelector', function() {
    let size = this.get('window.size');
    let { width, height } = subtractPadding(size);
    let maxWidth = calculateMaxWidth(this.get('maxWidthSelector'));
    if(maxWidth && width > maxWidth) {
      width = maxWidth;
    }
    return { width, height, window: size };
  }).readOnly(),

});
