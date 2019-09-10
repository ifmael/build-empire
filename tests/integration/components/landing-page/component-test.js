import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | landing-page', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach( async function() {
    await render(hbs`{{landing-page}}`);
  });

  test('it renders', function(assert) {
    assert.ok(this.$().length);
  });

  test('Render add-movie-form, movie-list and movie-list-header components', function(assert) {
    assert.ok(this.$('.add-movie-form').length);
    assert.ok(this.$('.movie-list').length);
    assert.ok(this.$('.movie-list-header').length);
  });

});
