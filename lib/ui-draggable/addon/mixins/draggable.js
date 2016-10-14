import Ember from 'ember';

const {
  computed,
  inject: { service }
} = Ember;

const setDraggingOver = (target, value) => {
  if(target && !target._isDestroying) {
    target.set('isDraggingOver', value);
  }
};

export default Ember.Mixin.create({
  classNameBindings: [ 'isDragging:dragging', 'isDraggingOver:over' ],
  attributeBindings: [ 'draggable' ],

  draggableCoordinator: service(),

  isDraggable: true,
  isDragging: false,
  isDraggingOver: false,

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

    let over = coordinator.get('over');
    coordinator.set('over', null);

    setDraggingOver(over, false);
  },

  dragOver(e) {
    e.preventDefault();
    e.stopPropagation();

    let coordinator = this.get('draggableCoordinator');
    let over = coordinator.get('over');
    if(over !== this) {
      setDraggingOver(over, false);
      coordinator.set('over', this);
      setDraggingOver(this, true);
      console.log('over', coordinator.get('current.title_'), 'on', this.get('model.title_'));
    }
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
