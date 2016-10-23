import Ember from 'ember';
import { prefix, type, attr } from 'sofa';
import Section from './section';

const {
  computed
} = Ember;

const isOpen = () => {
  const lookup = (model) => {
    let open = model._isOpen;
    if(open !== undefined) {
      return open;
    }
    return model.get('open');
  };
  return computed('open', {
    get() {
      return lookup(this);
    },
    set(key, value) {
      this._isOpen = value;
      return lookup(this);
    }
  });
};

export default Section.extend({

  id: prefix('section:'),
  type: type('section:category'),

  open: attr('boolean'),
  isOpen: isOpen(),

  didSelect() {
    this.set('isOpen', true);
  }

});
