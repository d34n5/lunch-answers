import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  sortBy: ['rating:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy')
});
