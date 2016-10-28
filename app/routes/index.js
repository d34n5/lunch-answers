import Ember from 'ember';

var questions = [{
  content: "Does anyone know of any Monday lunch specials?",
  author: "CartSeeker",
  notes: "Loves Asian street food"
}, {
  content: "Biggest Burritos in Downtown?",
  author: "BurritoManiac",
  notes: "I live for Taco Tuesday"
}, {
  content: "Best $5 sandwich",
  author: "SueEats",
  notes: "Nothing says I've given up like a Subway sandwich"
}, {
  content: "Most authentic Thai cart?",
  author: "CartSeeker",
  notes: "Loves Asian street food"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
