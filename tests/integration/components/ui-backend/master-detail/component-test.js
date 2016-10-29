import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-backend/master-detail', 'Integration | Component | ui backend/master detail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-backend/master-detail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-backend/master-detail}}
      template block text
    {{/ui-backend/master-detail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
