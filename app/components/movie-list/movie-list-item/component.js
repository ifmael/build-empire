import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',

  classNames: ['movie-list-item'],

  movie: null,

  actions: {
    delete(movie){
      movie.destroyRecord();
    }
  }
});
