import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    $('div.hidden').fadeIn(1000, () => {
      removeClass('hidden');
    });
  }
});
