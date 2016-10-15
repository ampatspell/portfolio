import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('frontend-section-gallery', 'Integration | Component | frontend section gallery', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{frontend-section-gallery}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#frontend-section-gallery}}
      template block text
    {{/frontend-section-gallery}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
