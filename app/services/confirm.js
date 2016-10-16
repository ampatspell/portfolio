import Ember from 'ember';

const {
  computed,
  on,
  RSVP: { defer }
} = Ember;

const cb = (fn) => {
  return function() {
    fn.call(this, this.get('deferred'));
    this.get('service').alertDidFinish();
  };
};

const Alert = Ember.Object.extend({

  service: null,

  title: null,
  message: null,
  resolveTitle: null,
  rejectTitle: null,

  deferred: null,

  setup: on('init', function() {
    this.set('deferred', defer());
  }),

  buttons: computed(function() {
    return Ember.A([
      { title: this.get('resolveTitle' ), action: () => this.resolve() },
      { title: this.get('rejectTitle' ),  action: () => this.reject() },
    ]);
  }).readOnly(),

  promise: computed(function() {
    return this.get('deferred').promise;
  }),

  resolve: cb(function(deferred) {
    deferred.resolve();
  }),

  reject: cb(function(deferred) {
    let err = new Ember.Error('Confirm rejected');
    err.confirm = true;
    deferred.reject(err);
  }),

});

export default Ember.Service.extend({

  alert: null,

  show(title, message, resolveTitle, rejectTitle='Cancel') {
    let alert = this.get('alert');
    if(alert) {
      alert.reject();
    }

    alert = Alert.create({ service: this, title, message, resolveTitle, rejectTitle });
    this.set('alert', alert);

    return alert.get('promise');
  },

  alertDidFinish() {
    this.set('alert', null);
  }

});
