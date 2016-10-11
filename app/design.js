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

export default {
  section
};
