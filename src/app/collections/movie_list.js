import Backbone from 'backbone';
import Movie from '../models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: "http://localhost:3000/movies",

  getSearchResults: function(query) {
    var self = this;
    this.fetch({
      reset: true,
      data: $.param({ query: query}),
      success: function(collection, response, options) {
        console.log("Search success");
        self.trigger('successOnFetch');
      }
    });
  }
});

export default MovieList;
