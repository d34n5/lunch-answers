import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  sortBy: ["question.get('answers').get('length'):desc"],
  sortedQuestions: Ember.computed.sort('question.answers', 'sortBy'),
});
