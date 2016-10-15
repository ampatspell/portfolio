import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('screen-backend/session-new', 'Integration | Component | screen backend/session new', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{screen-backend/session-new}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#screen-backend/session-new}}
      template block text
    {{/screen-backend/session-new}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
