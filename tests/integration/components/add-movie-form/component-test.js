import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | add-movie-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`{{add-movie-form}}`);

    assert.ok(this.$().length);

  });

  test('Show all input', async function(assert) {
    await render(hbs`{{add-movie-form}}`);

    assert.equal(this.element.querySelectorAll('input').length, 4);

  });

  test('Show the correct inputs', async function(assert) {
    await render(hbs`{{add-movie-form}}`);

    assert.equal(this.element.querySelector('.form-title').type, 'text');
    assert.equal(this.element.querySelector('.form-description').type, 'text');
    assert.equal(this.element.querySelector('.form-image-url').type, 'text');
    assert.equal(this.element.querySelector('.form-rating').type, 'number');
  });

  test('Validate form', async function(assert) {
    const movie = {
      title: 'kill bill',
      description: 'Kill Bill is admittedly little more than a stylish revenge thriller',
      image: 'http://image/kill-bill.jpg',
      rating: 5
    };

    this.set('add', function(title, description, image, rating){
      assert.equal(title, movie.title);
      assert.equal(description, movie.description);
      assert.equal(image, movie.image);
      assert.equal(rating, movie.rating);
    });  

    await render(hbs`{{add-movie-form add=(action add)}}`);
    await fillIn('.form-title', movie.title );
    await fillIn('.form-description', movie.description);
    await fillIn('.form-image-url', movie.image);
    await fillIn('.form-rating', movie.rating);
    
    await click('button');
  });
});
