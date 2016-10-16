import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('screen-backend/sections/section/index/ui-actions', 'Integration | Component | screen backend/sections/section/index/ui actions', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{screen-backend/sections/section/index/ui-actions}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#screen-backend/sections/section/index/ui-actions}}
      template block text
    {{/screen-backend/sections/section/index/ui-actions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
