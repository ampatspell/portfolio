export default {
  name: 'portfolio:changes',
  after: 'portfolio:injections',
  initialize(app) {
    if(!app.lookup('service:fastboot').get('isFastBoot')) {
      return;
    }
    let changes = app.lookup('service:store').get('db.main').changes('main');
    changes.start();
  }
};
