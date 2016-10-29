import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-backend/sections/section/edit/content/link', 'Integration | Component | ui backend/sections/section/edit/content/link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-backend/sections/section/edit/content/link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-backend/sections/section/edit/content/link}}
      template block text
    {{/ui-backend/sections/section/edit/content/link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});