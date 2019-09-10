import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  add:null,
  movies:null,

  moviesSorted: computed.sort('movies', 'moviesSortDefinition'),
  moviesSortDefinition: ['rating:desc', 'title:asc'],
});
