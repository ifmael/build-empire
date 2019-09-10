import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | movie-list-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{movie-list-header}}`);

    assert.ok(this.$().length);
  });


  test('it should show Movies', async function(assert) {
    await render(hbs`{{movie-list-header}}`);

    assert.equal(find('h1').innerText, 'Movies');
  });
});
