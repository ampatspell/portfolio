import Ember from 'ember';

const {
  computed,
  $
} = Ember;

class Placeholder {
  constructor(component) {
    this.component = component;
    this.state = {};
    this._dragover = this.dragover.bind(this);
    this._drop = this.drop.bind(this);
  }

  createElement() {
    let el = $(this.component.get('element')).clone();
    el.addClass('placeholder');
    return el[0];
  }

  get element() {
    let e = this._element;
    if(!e) {
      e = this.createElement();
      e.addEventListener('dragover', this._dragover, false);
      e.addEventListener('drop', this._drop, false);
      this._element = e;
    }
    return e;
  }

  dragover(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  drop(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('drop on placeholder');
  }

  insert(pos, component) {
    if(this.state.pos === pos && this.state.component === component) {
      return;
    }

    this.state = { pos, component };

    let c = component.get('element');
    let e = this.element;

    if(pos === 'after') {
      $(e).insertAfter(c);
    } else {
      $(e).insertBefore(c);
    }
  }

  remove() {
    let element = this._element;
    if(!element) {
      return;
    }
    $(element).remove();
    element.removeEventListener('dragover', this._dragover);
    element.removeEventListener('drop', this._drop);
    this._element = null;
    this._state = {};
  }

}
export default Ember.Service.extend({

  dragging: null,
  placeholder: null,

  start(dragging) {
    if(this.get('dragging')) {
      return false;
    }
    let placeholder = new Placeholder(dragging);
    // placeholder.insert('after', dragging);
    this.setProperties({ dragging, placeholder });
    dragging.set('isDragging', true);
    return true;
  },

  stop() {
    let { placeholder, dragging } = this.getProperties('placeholder', 'dragging');
    if(!placeholder) {
      return false;
    }
    placeholder.remove();
    dragging.set('isDragging', false);
    this.setProperties({ dragging: null, placeholder: null });
    return true;
  },

  over(e, component) {
    let placeholder = this.get('placeholder');
    if(!placeholder) {
      return;
    }

    let curr = component;
    while(curr) {
      if(curr.get('isDragging')) {
        if(e.shiftKey) {
          debugger;
        }
        return;
      }
      curr = curr.get('parentView');
    }

    let el = component.get('element');
    let offset = $(el).offset().top;
    let h = $(el).height();

    let pos = e.pageY < offset + (h / 2) ? 'before' : 'after';
    placeholder.insert(pos, component);
  }

});
