/* global emit */

const gallery = {
  views: {
    all: {
      map(doc) {
        if(doc.type !== 'section:gallery') {
          return;
        }
        emit(doc._id);
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
  gallery,
  section,
  'gallery-image': galleryimage
};
