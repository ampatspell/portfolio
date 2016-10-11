export default {
  name: 'portfolio:dev',
  initialize(app) {
    let store = app.lookup('service:store');
    let db = store.get('db.main');
    window.db = db;
    window.store = store;
    window.log = console.log.bind(console);
  }
}
