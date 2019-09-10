import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | movie-list/movie-list-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{movie-list/movie-list-item}}`);

    assert.ok(this.$().length);
  });

   /*test('Show movie', async function(assert) {
    const movieData = [
      {
        title: 'kill bill',
        description: 'Description for kill bill 1',
        image: 'http://images.org/kill-bill',
        rating: '5',
      }
    ];

    await render(hbs`{{movie-list-item movie=movieData}}`);
    const component = this.owner.lookup('component:movie-list/movie-list-item');
    assert.ok(this.$().length);
  });*/
});
