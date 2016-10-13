import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('screen-backend-sections-section-edit-gallery', 'Integration | Component | screen backend sections section edit gallery', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{screen-backend-sections-section-edit-gallery}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#screen-backend-sections-section-edit-gallery}}
      template block text
    {{/screen-backend-sections-section-edit-gallery}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
