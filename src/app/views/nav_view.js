import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
// import Movie from '../models/movie.js';
// // import MovieView from './movie_view';

var NavView = Backbone.View.extend({
  events: {
    'click #search-btn': 'searchMovies',
    'click #rental-lib': 'getRentalLibrary'
  },

  searchMovies: function(event) {
    event.preventDefault();
    var query = this.$('#search-input').val();
    console.log("Query! " + query);
    this.model.getSearchResults(query);
  },

  getRentalLibrary: function(event) {
    event.preventDefault();
    console.log("Rental library!");
    this.model.fetch();
  }

});

export default NavView;
