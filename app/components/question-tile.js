import Ember from 'ember';

// order of operations an issue??
// Feel like problem is in this component

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  isNoteShowing: false,
  // updateQuestionForm: false,
  actions: {
    addToFavorites(question) {
      this.get('favoritesList').add(question);
      this.set('addedToFavorites', true);
    },
    noteShow() {
      this.set('isNoteShowing', true);
    },
    noteHide() {
      this.set('isNoteShowing', false);
     }
    // update (question, params) {
    //   this.sendAction('update', question, params);
  //}
  }
});
