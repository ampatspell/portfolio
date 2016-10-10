import { Store } from 'sofa';

const url = 'http://127.0.0.1:5984';

const mapping = {
  main: 'paulis',
  users: '_users'
};

export default Store.extend({

  databaseOptionsForIdentifier(identifier) {
    let name = mapping[identifier];
    if(!name) {
      return;
    }
    return { url, name };
  }

});
