import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';


module('Unit | Model | movie', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('movie', {}));
    assert.ok(model);
  });

  test('There is any movie', async function(assert){
    const store = this.owner.lookup('service:store');
    const movies = await store.findAll('movie');
    assert.ok(movies.length > 0);
  });

  test('Create a new fake movie', async function(assert){
    const store = this.owner.lookup('service:store');
    const record = await store.createRecord('movie', {
      title:' fake movie', description: 'fake description', image: 'fake image', rating: 'fake rating'
    });
    assert.ok(record.isNew);
    record.rollbackAttributes();
    assert.notOk(record.isNew);
  });

  test('Find a specific movie', async function(assert){
    const store = this.owner.lookup('service:store');
    const movies = await store.findAll('movie');
    const id = movies.objectAt(0).id;
    const movie = await store.find('movie', id);
    assert.notOk(movie.isEmpty);
    assert.ok(movie.isValid);
  });

  test('Delete a specific movie', async function(assert){
    const store = this.owner.lookup('service:store');
    const movies = await store.findAll('movie');
    const movie = movies.objectAt(0);
    assert.notOk(movie.isDeleted);
    movie.deleteRecord();
    assert.ok(movie.isDeleted);
  });

});
