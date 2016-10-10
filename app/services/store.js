import { Store } from 'sofa';
import environment from '../config/environment';

const { url, name: main } = environment.portfolio.database;

const mapping = {
  main,
  users: '_users'
};

export default Store.extend({

  databaseOptionsForIdentifier(identifier) {
    console.log(mapping);
    let name = mapping[identifier];
    if(!name) {
      return;
    }
    return { url, name };
  }

});
