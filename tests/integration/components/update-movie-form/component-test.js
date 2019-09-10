import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | update-movie-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{update-movie-form}}`);

    assert.ok(this.$().length);

  });

  test('Show all input', async function(assert) {
    await render(hbs`{{update-movie-form}}`);

    assert.equal(this.element.querySelectorAll('input').length, 4);

  });

  test('Validate form', async function(assert) {
    const movieData = {
      title: 'kill bill 2',
      description: 'Kill Bill 2 is admittedly little more than a stylish revenge thriller',
      image: 'http://image/kill-bil-2l.jpg',
      rating: 3
    };

    const movieEdited = {
      title:'kill bill 3',
      description: 'Bill has resurrected',
      image:'http://image/kill-bil-3.jpg',
      rating: 5
    };

    this.set('movie', movieData);

    this.set('update', function(movie){
      assert.equal(movieEdited.title, movie.title);
      assert.equal(movieEdited.description, movie.description);
      assert.equal(movieEdited.image, movie.image);
      assert.equal(movieEdited.rating, movie.rating);
    });  

    await render(hbs`{{update-movie-form update=(action update) movie=movie}}`);

    await fillIn('.form-title', movieEdited.title);
    await fillIn('.form-description', movieEdited.description);
    await fillIn('.form-image-url', movieEdited.image);
    await fillIn('.form-rating', movieEdited.rating);
    
    await click('button');
  });
});
