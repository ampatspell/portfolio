import Ember from 'ember';
import layout from '../../templates/components/frontend-section-gallery/vertical';
import ScrollTop from 'portfolio/util/scroll-top-component';

export default Ember.Component.extend(ScrollTop, {
  classNameBindings: [ ':frontend-section-gallery-vertical' ],
  layout
});
