export default {
  name: 'portfolio:dev',
  initialize(app) {
    let store = app.lookup('service:store');
    let db = store.get('db.main');
    window.db = db;
    window.store = store;
    window.log = console.log.bind(console);

    window.migrate = () => {
      let docs = db.get('documents');
      return db.insertDesignDocuments().then(() => {
        return docs.view('main', 'section', { include_docs: true });
      }).then(json => {
        return Ember.RSVP.all(json.rows.map(item => item.doc).map(doc => {
          let title = doc.title;
          delete doc.title;
          doc.page_title = title;
          return docs.save(doc);
        }));
      });
    };
  }
};
