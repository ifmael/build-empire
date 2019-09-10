import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | movie-list-header', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach( async function(){
    await render(hbs`{{movie-list-header}}`);
  });

  test('it renders', async function(assert) {
    assert.ok(this.$().length);
  });


  test('it should show Movies', async function(assert) {
    assert.equal(find('h1').innerText, 'Movies');
  });
});
