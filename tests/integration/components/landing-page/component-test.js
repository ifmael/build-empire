import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find  } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | landing-page', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{landing-page}}`);

    assert.ok(this.$().length);

  });

  test('Render add-movie-form, movie-list and movie-list-header components', async function(assert) {
    await render(hbs`{{landing-page}}`);

    assert.ok(this.$('.add-movie-form').length);
    assert.ok(this.$('.movie-list').length);
    assert.ok(this.$('.movie-list-header').length);
  });

});
