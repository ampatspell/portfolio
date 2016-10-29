import Ember from 'ember';

const {
  on,
  run: { scheduleOnce, debounce },
  Evented,
  $,
  inject: { service },
  computed: { reads }
} = Ember;

export default Ember.Service.extend(Evented, {

  size: null,

  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),

  startListeningResizeEvents: on('init', function() {
    if(this.get('isFastBoot')) {
      return;
    }
    this.updateWindowResize();
    $(window).on('resize', $.proxy(this.__onWindowResize, this));
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

  __onWindowResize() {
    debounce(this, this._onWindowResize, 100);
  },

  _onWindowResize() {
    scheduleOnce('afterRender', () => {
      this.updateWindowResize();
      this.trigger("resize", this);
      this.notifyPropertyChange('resize');
    });
  }

});
