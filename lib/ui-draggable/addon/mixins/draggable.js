import Ember from 'ember';

const {
  computed,
  inject: { service },
} = Ember;

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
    let started = coordinator.start(this);
    if(!started) {
      return;
    }
    e.dataTransfer.effectAllowed = "move";
  },

  dragEnd(e) {
    e.preventDefault();
    e.stopPropagation();
    this.get('draggableCoordinator').stop();
  },

  dragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.get('draggableCoordinator').over(e, this);
  },

  drop(e) {
    e.preventDefault();
    this.get('draggableCoordinator').stop();
  },

  onDrop(model, pos, relative) {
  },

  onDraggableDrop(pos, component) {
    this.onDrop(this.get('model'), pos, component.get('model'));
  }

});
