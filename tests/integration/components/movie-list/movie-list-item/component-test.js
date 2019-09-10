import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | movie-list/movie-list-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{movie-list/movie-list-item}}`);
    assert.ok(this.$().length);
  });

   test('Show movie', async function(assert) {
    const store = this.owner.lookup('service:store');
    const movies = await store.findAll('movie');
    const id = movies.objectAt(0).id;
    const movie = await store.find('movie', id);

    this.set('movie', movie);
    await render(hbs`{{movie-list/movie-list-item movie=movie}}`);
    assert.ok(findAll('li').length === 1);
  });

});
