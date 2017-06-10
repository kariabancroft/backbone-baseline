import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import MovieDetailView from '../views/movie_detail_view.js'

var MovieView = Backbone.View.extend({
  tagName: 'div',
  className: "large-3 small-3 columns movie",
  initialize: function(params) {
    // this.model = params.model;
    this.template = params.template;

    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },


  events: {
    'click .lib-button': 'addToLibrary',
    'click img': 'togglePoster',
    'click .rent-button': 'rentMovie'
    // 'click button.success': "toggleComplete"
  },

  addToLibrary: function(event) {
    console.log("Add to library!");

    // var val = event.target.id;
    // console.log(val);
    this.model.addToLibrary();
    // var query = this.$('#search-input').val();
  },

  rentMovie: function(event) {
    console.log("In a rent");

    var template = _.template($('#movie-detail-template').html());
    new MovieDetailView({
      el: '#main-row',
      model: this.model,
      movieTemplate: template
    });
    // })
  },

  togglePoster: function(event) {
    console.log("In a toggle poster");

    var img = this.$el.find("img");
    var parentDiv = this.$el;//.find(".movie-detail");

    if ($(img).hasClass("dimmed")) {
      // parentDiv.
      this.$el.find(".movie-detail").remove();
    } else {
      console.log("NO DIMMING");
      var detailTemplate = _.template($('#movie-detail-list-template').html());
      var compiledTemplate = detailTemplate(this.model.toJSON());
      // console.log(compiledTemplate);
      $(parentDiv).append(compiledTemplate);
    }

    $(img).toggleClass("dimmed");

  }

  //
  // deletemovie: function(e) {
  //   this.model.destroy();
  // },
  // toggleComplete: function(){
  //   this.model.toggleComplete();
  //   // console.log(this.model.get("completed"));
  //   // this.render();
  //   }
});

export default MovieView;
