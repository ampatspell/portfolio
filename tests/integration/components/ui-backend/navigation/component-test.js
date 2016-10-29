import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-backend/navigation', 'Integration | Component | ui backend/navigation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-backend/navigation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-backend/navigation}}
      template block text
    {{/ui-backend/navigation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
