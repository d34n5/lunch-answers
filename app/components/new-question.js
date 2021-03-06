import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        content: this.get('content') ? this.get('content') : "",
        author: this.get('author') ? this.get('author') : "",
        note: this.get('note') ? this.get('note') : "",
      };
      this.set('content', '');
      this.set('author', '');
      this.set('note', '');
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
