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
        let all = json.rows.map(item => item.doc);
        return Ember.RSVP.all(all.map(doc => {

          if(doc.title) {
            let title = doc.title;
            delete doc.title;
            doc.page_title = title;
          }

          let category = doc.category;
          if(category && typeof category === 'string') {
            let cat = all.findBy('_id', category);
            let type = cat.type.split(':')[1];
            doc.category = {
              id: cat._id,
              type
            };
          }

          return docs.save(doc);
        }));
      });
    };
  }
};
