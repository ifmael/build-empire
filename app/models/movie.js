import DS from 'ember-data';

const {attr, Model} = DS;

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  image: attr('string'),
  rating: attr('number')
});
