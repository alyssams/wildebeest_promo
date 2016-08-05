$(function() {
  $.scrollify({
    section:".panel",
    easing:"easeOutExpo",
    scrollSpeed:1100,
    scrollbars:false,
    sectionName:false,
    setHeights:false,
    overflowScroll:false,
    before:function(i, panels) {
      var active = $(".slide.active");

      active.addClass("remove");


      //setTimeout(function() {
        $("[data-slide=" + i + "]").addClass("active");
        active.removeClass("remove active");
      //},300);

      var ref = panels[i].attr("data-section-name");

      $(".home.active").addClass("active");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=#" + ref + "]").addClass("active");

    },
    afterRender() {
      $(".panel").each(function() {
        $(this).css("height", parseInt($(window).height())*6 );

        $(this).find(".inner").css("height", $(window).height());

      });

      var pagination = "<ul class=\"pagination\">";

      $(".panel").each(function(i) {
        pagination += "<li><a href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".home").append(pagination);


      $.scrollify.update();

      $("[data-slide=0]").addClass("active");

    }
  });
    $(".pagination a").on("click",$.scrollify.move);
});