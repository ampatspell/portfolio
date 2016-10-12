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
    },
    'visible': {
      map(doc) {
        if(doc._id.split(':')[0] !== 'section') {
          return;
        }
        if(!doc.visible) {
          return;
        }
        emit(doc._id, null);
      }
    },
    'by-slug': {
      map(doc) {
        if(doc._id.split(':')[0] !== 'section') {
          return;
        }
        emit(doc.slug, null);
      }
    }
  }
};

export default {
  section
};
