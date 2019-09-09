import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',

  classNames:['movie-list'],

  movies: null,

  actions: {
    sortMovies() {
      this.movies.sort(function(a, b){return a-b});
    } 
  }
});
