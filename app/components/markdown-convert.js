import Ember from 'ember';
import Component from 'ember-cli-showdown/components/markdown-to-html';

const {
  $
} = Ember;

export default Component.extend({

  click(e) {
    let target = e.target;
    if(!target) {
      return;
    }
    if(target.tagName !== 'A') {
      return;
    }
    $(target).attr('target', '_blank');
  }

});
