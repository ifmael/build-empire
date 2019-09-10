import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | movie-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{movie-list}}`);

    assert.ok(this.$().length);
  });


  test('Show list of movies', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    const moviesSorted = [
      {
        title: 'kill bill',
        description: 'Description for kill bill 1',
        image: 'http://images.org/kill-bill',
        rating: '5',
      },
      {
        title: 'kill bill 2',
        description: 'Description for kill bill 2',
        image: 'http://images.org/kill-bill',
        rating: '4',
      },
      {
        title: 'Once upon a time .. Hollywood ',
        description: 'Description Once upon a time ... Holywood',
        image: 'http://images.org/once-upon-a-time',
        rating: '3',
      },
      {
        title: 'Pull Fiction',
        description: 'Description for Pull fiction',
        image: 'http://images.org/pull-fiction',
        rating: '2',
      }
    ];

    await render(hbs`{{movie-list}}`);
    this.set('movies',moviesSorted);
    assert.ok(this.$().length);
  });
});
