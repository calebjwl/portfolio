import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    prevent() {
      return false;
    },

    open(dropdown) {
      if (this.closeTimer) {
        cancel(this.closeTimer);
        this.closeTimer = null;
      } else {
        dropdown.actions.open();
      }
    },

    // close(dropdown) {
    //   this.closeTimer = later(() => {
    //     this.closeTimer = null;
    //     dropdown.actions.close();
    //   }, 200);
    // },

    close(dropdown) {
      dropdown.actions.close();
    },
  }
});
