import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  add:null,
  movies:null,

  moviesSorted: computed.sort('movies', function(a,b){
    return a.rating < b.ratig ? 1:-1;
  }),
  
});
