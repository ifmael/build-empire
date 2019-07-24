import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addMovie(title, description, image) {
      const newMovie = this.store.createRecord('movie', {
        title,
        description,
        image
      });
      newMovie.save();
    } 
  }
});