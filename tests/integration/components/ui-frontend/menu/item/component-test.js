import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-frontend/menu/item', 'Integration | Component | ui frontend/menu/item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-frontend/menu/item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-frontend/menu/item}}
      template block text
    {{/ui-frontend/menu/item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
