import Ember from 'ember';
import ScrollTop from 'portfolio/mixins/scroll-top';

export default Ember.Component.extend(ScrollTop, {
  classNameBindings: [ ':ui-frontend-section-content-gallery-content', ':vertical' ],
});
