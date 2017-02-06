import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('native-drag-drop', 'Integration | Component | native drag drop', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{native-drag-drop}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#native-drag-drop}}
      template block text
    {{/native-drag-drop}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
