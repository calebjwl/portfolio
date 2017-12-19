import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  actions: {
    didRender() {
      $(document).ready(function() {
        $('#main-content').fadeIn();
      });
    }
  }
});
