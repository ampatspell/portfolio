import { Changes } from 'sofa';
import environment from '../../config/environment';

const {
  portfolio: {
    changes: {
      feed
    }
  }
} = environment;

export default Changes.extend({

  feed

});
