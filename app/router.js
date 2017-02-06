import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('x-pivot');
  this.route('native-drag-drop');
  this.route('x-sortable');
});

export default Router;
