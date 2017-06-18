import { DatabaseChanges } from 'sofa';
import environment from '../../config/environment';

const {
  portfolio: {
    changes: {
      feed
    }
  }
} = environment;

export default DatabaseChanges.extend({

  feed

});
