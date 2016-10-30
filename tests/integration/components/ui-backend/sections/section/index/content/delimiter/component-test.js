import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-backend/sections/section/index/content/delimiter', 'Integration | Component | ui backend/sections/section/index/content/delimiter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-backend/sections/section/index/content/delimiter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-backend/sections/section/index/content/delimiter}}
      template block text
    {{/ui-backend/sections/section/index/content/delimiter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
