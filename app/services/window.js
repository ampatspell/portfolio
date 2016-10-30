import Ember from 'ember';

const {
  on,
  run: { scheduleOnce },
  Evented,
  $,
  getOwner,
  computed,
  computed: { reads }
} = Ember;

const fastboot = () => {
  return computed(function() {
    return getOwner(this).lookup('service:fastboot');
  }).readOnly();
}

export default Ember.Service.extend(Evented, {

  size: null,

  fastboot: fastboot(),
  isFastBoot: reads('fastboot.isFastBoot'),

  startListeningResizeEvents: on('init', function() {
    if(this.get('isFastBoot')) {
      return;
    }
    this.updateWindowResize();
    $(window).on('resize', $.proxy(this._onWindowResize, this));
  }),

  updateWindowResize() {
    var e = document.documentElement;
    let size = {
      width:  e.clientWidth,
      height: e.clientHeight,
    };
    let prev = this.get('size');
    if(prev && prev.width === size.width && prev.height === size.height) {
      return;
    }
    this.set("size", size);
  },

  _onWindowResize() {
    scheduleOnce('afterRender', () => {
      this.updateWindowResize();
      this.trigger("resize", this);
      this.notifyPropertyChange('resize');
    });
  }

});
