import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    $('div.hidden').fadeIn(2000, () => {
      removeClass('hidden');
    });
  }
});
