import Ember from 'ember';
import layout from '../templates/components/frontend-carousel';
import Fixed from './-fixed';

const {
  computed,
  String: { htmlSafe }
} = Ember;

export default Ember.Component.extend(Fixed, {
  classNameBindings: [ ':frontend-carousel' ],
  attributeBindings: [ 'style' ],
  layout,

  isReady: false,

  images: null,
  selectedImage: null,

  style: computed('size', function() {
    let { window: { height } } = this.get('size');
    return htmlSafe(`height: ${height}px`);
  }).readOnly(),

  imageStyle: computed('size', function() {
    let { width } = this.get('size');
    return htmlSafe(`min-width: ${width}px`);
  }).readOnly(),

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
