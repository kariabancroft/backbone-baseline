import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view';
import Movie from '../models/movie';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.movieTemplate = params.movieTemplate;

    this.listenTo(this.model, "update", this.render);

    this.listenTo(this.model, 'successOnFetch', this.render);
  },

  render: function() {
    console.log("Inside MLV.render()");
    var self = this;

    // Clear out any existing items (incase render
    // is called multiple times)
    self.$el.empty();

    self.model.each(function(movie) {

      // Create a new TaskView with the model & template
      var movieView = new MovieView({
        model: movie,
        template: self.movieTemplate
      });

      // Then render the TaskView
      // And append the resulting HTML to the DOM.
      self.$el.append(movieView.render().$el);

      // equivalent to
      // self.$el.find('.todo-items').whatever
    });

    // Rules of backbone: always return `this` from `render()`
    return this;
  },

  events: {
    'click #search-btn': 'searchMovies'
    // 'click #add-task': 'addTask'
  },

  searchMovies: function(event) {
    event.preventDefault();
    var query = this.$('#search-input').val();
    console.log("Query!" + query);
  }


});

export default MovieListView;
