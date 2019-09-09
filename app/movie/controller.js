import Controller from '@ember/controller';

export default Controller.extend({
    updated: null,
    actions: {
        updateMovie(movie){;
            this.setProperties({'updated': 'Updating...'});
            movie.save()
                .then(data =>{
                    this.setProperties({'updated': 'Updated... Redirecting'});
                    setTimeout(()=>{
                        this.setProperties({'updated': ''});
                        this.transitionToRoute('index');
                    }, 2000)
                });
        }
      },
});
