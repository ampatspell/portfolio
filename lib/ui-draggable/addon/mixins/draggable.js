import Ember from 'ember';

const {
  computed,
  inject: { service },
  $
} = Ember;

class Placeholder {
  constructor(component) {
    this.component = component;
    this.state = {};
    this.first = true;
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
      e.addEventListener('dragover', this.dragover.bind(this), false);
      e.addEventListener('drop', this.drop.bind(this), false);
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
    let e = this._element;
    if(e) {
      $(e).remove();
      this._element = null;
      this._state = {};
    }
  }

}

export default Ember.Mixin.create({
  classNameBindings: [ 'isDragging:dragging' ],
  attributeBindings: [ 'draggable' ],

  draggableCoordinator: service(),

  isDraggable: true,
  isDragging: false,

  draggable: computed('isDraggable', function() {
    if(this.get('isDraggable')) {
      return true;
    }
    return null;
  }),

  dragStart(e) {
    e.stopPropagation();

    if(!this.get('isDraggable')) {
      e.preventDefault();
      return;
    }

    let coordinator = this.get('draggableCoordinator');

    let model = this.get('model');
    let started = coordinator.start(model);
    if(!started) {
      return;
    }

    let transfer = e.dataTransfer;
    transfer.effectAllowed = "move";

    let placeholder = new Placeholder(this);
    coordinator.set('placeholder', placeholder);
    placeholder.insert('after', this);

    this.set('isDragging', true);

    console.log('start', this.get('model.title_'));
  },

  dragEnd(e) {
    e.preventDefault();
    e.stopPropagation();

    if(!this.get('isDragging')) {
      return;
    }

    this.set('isDragging', false);

    let coordinator = this.get('draggableCoordinator');
    coordinator.stop();

    let placeholder = coordinator.get('placeholder');
    placeholder.remove();
    coordinator.set('placeholder', null);
  },

  dragOver(e) {
    e.preventDefault();
    e.stopPropagation();

    let coordinator = this.get('draggableCoordinator');
    let placeholder = coordinator.get('placeholder');

    let el = this.get('element');
    let offset = $(el).offset().top;
    let h = $(el).height();

    let pos = e.pageY < offset + (h / 2) ? 'before' : 'after';
    placeholder.insert(pos, this);
  },

  drop(e) {
    e.preventDefault();

    let coordinator = this.get('draggableCoordinator');
    let dataTransfer = e.originalEvent.dataTransfer;

    let model = coordinator.stop();
    if(!model) {
      return;
    }

    console.log('drop', model.get('title_'), 'on', this.get('model.title_'));
  },

});
