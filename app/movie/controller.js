import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        updateMovie(movie){;
            movie.save()
                .then(data =>{
                    setTimeout(()=>{
                        this.transitionToRoute('index');
                    }, 2000)
                });
        }
      },
});
