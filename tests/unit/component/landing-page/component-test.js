import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';


module('Unit | Component | landing-page', function(hooks) {
  setupTest(hooks);

  let ratings = [
    {rating:2},
    {rating:4},
    {rating:3},
    {rating:5}
  ];

  test('Sort by rating', function(assert){
    let ratingsSorted = [
      {rating:5},
      {rating:4},
      {rating:3},
      {rating:2}
    ];

    let component = this.owner.lookup('component:landing-page');
    component.movies = ratings;
    assert.deepEqual(component.moviesSorted, ratingsSorted);
  });

});
