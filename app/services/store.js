import Ember from 'ember';
import { Store } from 'sofa';
import environment from '../config/environment';

const {
  computed: { oneWay }
} = Ember;

const database = environment.portfolio.database;
const url = database.url;

const mapping = {
  main: database.name,
  users: '_users'
};

export default Store.extend({

  session: oneWay('db.main.couch.session'),

  databaseOptionsForIdentifier(identifier) {
    let name = mapping[identifier];
    if(!name) {
      return;
    }
    return { url, name };
  }

});
