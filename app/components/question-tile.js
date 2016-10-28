import Ember from 'ember';

export default Ember.Component.extend({
  isNoteShowing: false,
  // updateQuestionForm: false,
  actions: {
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
