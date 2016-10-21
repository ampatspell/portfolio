import Ember from 'ember';
import layout from '../templates/components/frontend-carousel';
import Fixed from './-fixed';

const {
  computed,
  String: { htmlSafe }
} = Ember;

const width = key => {
  return computed('size', function() {
    let { width } = this.get('size');
    return htmlSafe(`${key}: ${width}px`);
  }).readOnly();
};

export default Ember.Component.extend(Fixed, {
  classNameBindings: [ ':frontend-carousel' ],
  attributeBindings: [ 'style' ],
  layout,

  isReady: false,

  images: null,
  selectedImage: null,

  style: width('width'),
  imageStyle: width('min-width'),

  translate: computed('images.[]', 'selectedImage', 'size', function() {
    let { width } = this.get('size');
    let index = this.get('images').indexOf(this.get('selectedImage'));
    let x = index * width;
    return htmlSafe(`transform: translate3d(-${x}px, 0px, 0px);`);
  }).readOnly(),

  actions: {
    next() {
      if(this.attrs.next) {
        this.attrs.next();
      }
    }
  }

});
