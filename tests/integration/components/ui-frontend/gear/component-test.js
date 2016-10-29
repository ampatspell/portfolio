import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-frontend/gear', 'Integration | Component | ui frontend/gear', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-frontend/gear}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-frontend/gear}}
      template block text
    {{/ui-frontend/gear}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
