/* global emit */

const main = {
  views: {
    'by-type': {
      map(doc) {
        emit(doc.type, null);
      }
    },
    'section': {
      map(doc) {
        if(doc.type && doc.type.indexOf('section:') === 0) {
          emit(doc._id, null);
        }
      }
    }
  }
};

const section = {
  views: {
    'all': {
      map(doc) {
        if(doc._id.split(':')[0] !== 'section') {
          return;
        }
        emit(doc._id, null);
      }
    }
  }
};

const galleryimage = {
  views: {
    'by-gallery': {
      map(doc) {
        if(doc.type !== 'gallery-image') {
          return;
        }
        emit(doc.gallery, null);
      }
    }
  }
};

export default {
  main,
  section,
  'gallery-image': galleryimage
};
