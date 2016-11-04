import Ember from 'ember';

export default Ember.Component.extend({
  isNoteShowing: false,
  // updateQuestionForm: false,
  actions: {
    addToFavorites(item) {
      this.get('favoritesList').add(item);
      this.set('addedToFavorites', true)
    },
    noteShow() {
      this.set('isNoteShowing', true);
    },
    noteHide() {
      this.set('isNoteShowing', false);
    // },
    // update (question, params) {
    //   this.sendAction('update', question, params);
    }
  }
});
