var $post = $(".addClass");
$post.toggleClass("animateElement");
setInterval(function () {
  $post.removeClass("animateElement");
  setTimeout(function () {
    $post.addClass("animateElement");
  }, 1000);
}, 4000);