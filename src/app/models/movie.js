import Backbone from 'backbone';
import _ from 'underscore';

var Movie = Backbone.Model.extend({
  url: "http://localhost:3000/movies",
  initialize: function(params) {
    // // just to see what params looks like
    // console.log(params);
  },
  logStatus: function() {
    // console.log("Title: " + this.get("title"));
    // console.log("Completed: " + this.get("completed"));
  },
  addToLibrary: function() {
    console.log("WE are in ADD TO LIB in the model");

    var id = this.get("external_id")
    console.log(id);


    var model = this,
      url = this.url + '/' + id,
      // note that these are just $.ajax() options
      options = {
          url: url,
          type: 'POST' // see my note below
      };

    // add any additional options, e.g. a "success" callback or data
    // _.extend(options, opts);

    return (this.sync || Backbone.sync).call(this, null, this, options);
  }
});

export default Movie;
