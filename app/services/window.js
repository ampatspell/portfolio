import Ember from 'ember';

const {
  on,
  run: { scheduleOnce },
  Evented,
  $,
} = Ember;

export default Ember.Service.extend(Evented, {

  size: null,

  startListeningResizeEvents: on('init', function() {
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
