import Ember from 'ember';

export default Ember.Component.extend({
  isNoteShowing: false,
  updateQuestionForm: false,
  actions: {
    noteShow: function() {
      this.set('isNoteShowing', true);
    },
    noteHide: function() {
      this.set('isNoteShowing', false);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
