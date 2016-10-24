import Ember from 'ember';

const {
  $
} = Ember;

export default el => {
  if(!el) {
    return;
  }
  $(document.body).scrollTop($(el).offset().top);
};
