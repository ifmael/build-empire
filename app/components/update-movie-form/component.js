import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  classNames: ['update-movie-form'],

  movie: null,

  update: null,

  submit (event) {
    event.preventDefault();
    const update = this.get('update');
    update(this.movie);
  }
});
