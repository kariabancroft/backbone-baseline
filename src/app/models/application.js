import Backbone from 'backbone';
import Rolodex from 'app/collections/rolodex';

const Application = Backbone.Model.extend({
  // This model represents the overall application.
  initialize: function() {
    this.rolodex = new Rolodex();
  }
});

export default Application;
