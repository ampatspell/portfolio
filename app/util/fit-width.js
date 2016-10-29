import Ember from 'ember';

const {
  on,
  inject: { service },
  run: { next, cancel }
} = Ember;

export default Ember.Mixin.create({

  window: service(),

  isReady: false,

  max: 200,
  aspect: 0.8,
  size: null,

  resize() {
    let el = this.$();
    let w = el.width();

    let max = this.get('max');

    let cols = Math.floor(w / max);
    let width = Math.floor(w / cols);

    this.set('size', {
      cols,
      w: width,
      h: Math.floor(this.get('aspect') * width)
    });
  },

  onWindowResized() {
    this.resize();
  },

  setup: on('didInsertElement', function() {
    this._super(...arguments);
    this._next = next(() => {
      this.resize();
      this.set('isReady', true);
    });
  }),

  start: on('init', function() {
    this.get('window').on('resize', this, this.onWindowResized);
  }),

  willDestroy() {
    this._super(...arguments);
    this.get('window').off('resize', this, this.onWindowResized);
    cancel(this._next);
  }

});
