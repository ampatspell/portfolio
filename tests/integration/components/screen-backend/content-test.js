import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('screen-backend/content', 'Integration | Component | screen backend/content', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{screen-backend/content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#screen-backend/content}}
      template block text
    {{/screen-backend/content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
