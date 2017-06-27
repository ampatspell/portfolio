import { Model, hasMany } from 'sofa';

export default Model.extend({

  sections: hasMany('section', { inverse: null, relationship: 'session-sections' })

});
