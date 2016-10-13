/* global emit */

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
  section,
  'gallery-image': galleryimage
};
