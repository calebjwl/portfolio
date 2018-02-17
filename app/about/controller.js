import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  actions: {
    didRender() {
      console.log('rendered');
      $('div.hidden').fadeIn(2000).removeClass('hidden');
    }
  }
});
