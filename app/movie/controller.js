import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        update(movie){
            movie.set('description', 'new description');
            movie.save();
        }
      }
});
