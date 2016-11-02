import Ember from 'ember';

const {
  computed,
  inject: { service },
  run: { next, cancel }
} = Ember;

export default Ember.Mixin.create({
  classNameBindings: [ 'isDragging:dragging', 'isDraggingDelayed:dragging-delayed' ],
  attributeBindings: [ 'draggable' ],

  reorderableCoordinator: service('reorderable-coordinator'),

  isHorizontalReorder: false,

  isDraggable: true,
  isDragging: false,
  isDraggingDelayed: false,

  draggable: computed('isDraggable', function() {
    if(this.get('isDraggable')) {
      return true;
    }
    return null;
  }),

  willBeginDragging() {
    this.set('isDragging', true);
    cancel(this._isDraggingDelayed);
    this._isDraggingDelayed = next(() => {
      this.set('isDraggingDelayed', true);
    });
  },

  didFinishDragging() {
    cancel(this._isDraggingDelayed);
    this.setProperties({
      isDragging: false,
      isDraggingDelayed: false
    });
  },

  dragStart(e) {
    e.stopPropagation();
    if(!this.get('isDraggable')) {
      e.preventDefault();
      return;
    }
    let coordinator = this.get('reorderableCoordinator');
    let started = coordinator.start(this);
    if(!started) {
      return;
    }
    e.dataTransfer.effectAllowed = "move";
  },

  dragEnd(e) {
    e.preventDefault();
    e.stopPropagation();
    this.get('reorderableCoordinator').stop();
  },

  dragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.get('reorderableCoordinator').over(e, this);
  },

  drop(e) {
    e.preventDefault();
    this.get('reorderableCoordinator').stop();
  },

  onReorderableOver(component) {
    return this.constructor.detectInstance(component);
  },

  reorderModels(/* model, pos, relative */) {
  },

  onReorderableDrop(pos, component) {
    this.reorderModels(this.get('model'), pos, component.get('model'));
  }

});
