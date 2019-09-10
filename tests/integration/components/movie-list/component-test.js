import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | movie-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{movie-list}}`);

    assert.ok(this.$().length);
  });


  test('Show list of movies', async function(assert) {
    const store = this.owner.lookup('service:store');
    const movies = await store.findAll('movie');
    
    this.set('movies',movies)
    await render(hbs`{{movie-list movies=movies}}`);
    assert.ok(findAll('li').length > 0);
  });
});
