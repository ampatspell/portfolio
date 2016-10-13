export default {
  name: 'portfolio:injections',
  initialize(app) {
    app.inject('component', 'router', 'service:router');
  }
};
