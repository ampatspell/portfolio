import environment from '../config/environment';

const isDevelopment = environment.environment === 'development';

export default {
  name: 'portfolio:dev',
  initialize(app) {
    if(!isDevelopment) {
      return;
    }
    let store = app.lookup('service:store');
    let db = store.get('db.main');
    window.db = db;
    window.store = store;
    window.log = console.log.bind(console);
  }
};
