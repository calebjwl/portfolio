import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('about');
  this.route('contact');
  this.route('projects', function() {
    this.route('web');
    this.route('art');
    this.route('music');
  });
  this.route('drumkit');
});

export default Router;
