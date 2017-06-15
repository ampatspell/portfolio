export default {
  name: 'portfolio:changes',
  after: 'portfolio:injections',
  initialize(app) {
    let changes = app.lookup('service:store').get('db.main').changes('main');
    changes.on('change', change => console.log(change));
    changes.start();
  }
};
