import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addMovie(title, description, image, rating) {
      const newMovie = this.store.createRecord('movie', {
        title,
        description,
        image,
        rating
      });
      newMovie.save();
    } 
  }
});
