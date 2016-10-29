import Ember from 'ember';
import layout from '../../../../templates/components/frontend-section/summary/gallery/grid';
import FitWidth from 'portfolio/util/fit-width';

export default Ember.Component.extend(FitWidth, {
  classNameBindings: [ ':frontend-section-summary-gallery-grid' ],
  layout
});
