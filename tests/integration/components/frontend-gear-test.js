import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('frontend-gear', 'Integration | Component | frontend gear', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{frontend-gear}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#frontend-gear}}
      template block text
    {{/frontend-gear}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
