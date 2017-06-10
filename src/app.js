import $ from 'jquery';
import _ from 'underscore';

// import Movie from 'app/models/movie';
import MovieList from './app/collections/movie_list';
// import SearchList from './app/collections/search_list';

// import MovieView from './app/views/movie_view.js';
import MovieListView from './app/views/movie_list_view.js';

import NavView from './app/views/nav_view.js';

$(document).ready(function() {

  var movieList = new MovieList();
  movieList.fetch();

  var template = _.template($('#movie-list-template').html());

  var movieListView = new MovieListView({
    el: '#main-row',
    model: movieList,
    movieTemplate: template
  });

  var navView = new NavView({
    el: '.top-bar',
    model: movieList
  });

});
