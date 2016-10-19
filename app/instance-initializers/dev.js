export default {
  name: 'portfolio:dev',
  initialize(app) {
    let store = app.lookup('service:store');
    let db = store.get('db.main');
    window.db = db;
    window.store = store;
    window.log = console.log.bind(console);

    window.migrateGalleryTypes = () => {
      let type = app.lookup('service:backend').get('galleryTypes.firstObject.name');
      return db.insertDesignDocuments().then(() => {
        return db.find({ model: 'gallery', ddoc: 'gallery', view: 'all' });
      }).then(galleries => {
        return Ember.RSVP.all(galleries.map(gallery => {
          if(gallery.get('galleryType')) {
            return;
          }
          gallery.set('galleryType', type);
          return gallery.save();
        }));
      });
    };
  }
};
