import Ember from 'ember';

const {
  computed,
  $
} = Ember;

export default Ember.Service.extend({

  dragging: null,
  pos: null,
  component: null,

  start(dragging) {
    if(this.get('dragging')) {
      return false;
    }
    this.set('dragging', dragging);
    dragging.set('isDragging', true);
    return true;
  },

  stop() {
    let { dragging, component, pos } = this.getProperties('dragging', 'component', 'pos');
    if(!dragging) {
      return false;
    }
    dragging.set('isDragging', false);
    if(component && pos) {
      dragging.onDraggableDrop(pos, component);
    }
    this.setProperties({ dragging: null, component: null, pos: null });
    return true;
  },

  _insert(pos, component) {
    this.setProperties({ pos, component });

    let c = component.get('element');
    let e = this.get('dragging.element');

    if(pos === 'after') {
      $(e).insertAfter(c);
    } else {
      $(e).insertBefore(c);
    }
  },

  over(e, component) {
    if(this.get('dragging') === component) {
      return;
    }

    let curr = component;
    while(curr) {
      if(curr.get('isDragging')) {
        return;
      }
      curr = curr.get('parentView');
    }

    let el = component.get('element');
    let offset = $(el).offset().top;
    let h = $(el).height();

    let pos = e.pageY < offset + (h / 2) ? 'before' : 'after';
    this._insert(pos, component);
  }

});
