$(function() {
  $.scrollify({
    section:".panel",
    scrollbars:false,
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");

      $(".home.active").addClass("active");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=#" + ref + "]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";

      $(".panel").each(function(i) {
        pagination += "<li><a href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".home").append(pagination);
    }
  });


  /*

  Tip: The two click events below are the same:

  $(".pagination a").on("click",function() {
    $.scrollify.move($(this).attr("href"));
  });
  
  */
  $(".pagination a").on("click",$.scrollify.move);

});