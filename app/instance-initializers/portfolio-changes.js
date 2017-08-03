export default {
  name: 'portfolio:changes',
  after: 'portfolio:injections',
  initialize(app) {
    let fastboot = app.lookup('service:fastboot');
    if(fastboot.get('isFastBoot')) {
      return;
    }
    let changes = app.lookup('service:store').get('db.main').changes('main');
    changes.start();
  }
};
