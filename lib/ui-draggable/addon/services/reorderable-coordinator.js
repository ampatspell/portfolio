import Ember from 'ember';

const {
  $
} = Ember;

export default Ember.Service.extend({

  dragging: null,
  pos: null,
  component: null,
  placeholder: null,

  _insertPlaceholder(dragging) {
    let el = dragging.get('element');
    let placeholder = document.createComment('draggable-placeholder');
    $(placeholder).insertAfter(el);
    return placeholder;
  },

  _removePlaceholder(dragging, placeholder) {
    let el = dragging.get('element');
    $(el).insertBefore(placeholder);
    $(placeholder).remove();
  },

  start(dragging) {
    if(this.get('dragging')) {
      return false;
    }

    dragging.willBeginDragging();

    let placeholder = this._insertPlaceholder(dragging);
    this.setProperties({ dragging, placeholder });
    return true;
  },

  stop() {
    let { dragging, placeholder, component, pos } = this.getProperties('dragging', 'placeholder', 'component', 'pos');
    if(!dragging) {
      return false;
    }

    dragging.didFinishDragging();

    this._removePlaceholder(dragging, placeholder);

    if(component && pos) {
      dragging.onReorderableDrop(pos, component);
    }

    this.setProperties({ dragging: null, placeholder, component: null, pos: null });
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
    let dragging = this.get('dragging');
    if(dragging === component) {
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
    let pos;

    if(dragging.get('isHorizontalReorder')) {
      let offset = $(el).offset().left;
      let w = $(el).width();
      pos = e.pageX < offset + (w / 2) ? 'before' : 'after';
    } else {
      let offset = $(el).offset().top;
      let h = $(el).height();
      pos = e.pageY < offset + (h / 2) ? 'before' : 'after';
    }

    this._insert(pos, component);
  }

});
