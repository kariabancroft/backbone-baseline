import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';

var MovieDetailView = Backbone.View.extend({
  tagName: 'div',
  className: "row movie-detail",
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
    'click button': 'addToLibrary',
    'click img': 'togglePoster'
    // 'click button.success': "toggleComplete"
  },

  addToLibrary: function(event) {
    console.log("Add to library!");

    // var val = event.target.id;
    // console.log(val);
    this.model.addToLibrary();
    // var query = this.$('#search-input').val();
  },

  // togglePoster: function(event) {
  //   console.log("In a toggle poster");
  //
  //   var img = this.$el.find("img");
  //   var parentDiv = this.$el;//.find(".movie-detail");
  //
  //   if ($(img).hasClass("dimmed")) {
  //     // parentDiv.
  //     this.$el.find(".movie-detail").remove();
  //   } else {
  //     console.log("NO DIMMING");
  //     var detailTemplate = _.template($('#movie-detail-list-template').html());
  //     var compiledTemplate = detailTemplate(this.model.toJSON());
  //     // console.log(compiledTemplate);
  //     $(parentDiv).append(compiledTemplate);
  //   }
  //
  //   $(img).toggleClass("dimmed");
  // }

});

export default MovieDetailView;
