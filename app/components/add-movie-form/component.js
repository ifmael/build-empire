import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  classNames: ['add-movie-form'],

  title: null,
  image: null,
  description: null,

  add:null,

  submit (event) {
    const add = this.get('add');
    event.preventDefault();
    add(this.get('title'), this.get('description'), this.get('image'));
    this.setProperties({'title': null, 'image': null, 'description': null});
  }
});
