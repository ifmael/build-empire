import DS from 'ember-data';
import { computed } from '@ember/object';

const {attr, Model} = DS;

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  image: attr('string'),
  rating: attr('number')
});
