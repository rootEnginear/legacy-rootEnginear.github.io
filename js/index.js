function chkScroll(time=500){
  if($(window).scrollTop() <= 220){
    $("#top_btn").hide(time);
  }else{
    $("#top_btn").show(time);
  }
}

function adjustBg() {
  var percent;
  if ($(window).width() > $(window).height()) {
    percent = 0.5 + ($(window).scrollTop() * 0.005)
  } else {
    percent = 0.5 + ($(window).scrollTop() * 0.003)
  }
  $("body").css("background-position", "13% " + percent + "%");
  chkScroll();
}

$(function(){
  chkScroll(0);
  $(".bar>div").each(function(){
    delayStr = (Math.floor(Math.random()*(6*3+1))/6) + "s"; // ความละเอียด*เวลาทั้งหมด / ความละเอียด
    $(this).css({ "animation": "bobble 3s " + delayStr + " infinite" });
  });
  $("#copyright").html(new Date().getFullYear());
  $("#age").html(new Date(new Date() - new Date("2000 Feb 7")).getFullYear() - 1970) // If you birth on dd/mm/yyyy you have to use the date dd+2/mm/yyyy
  $("#modal01").prop("checked", true);
});

$(window).resize(adjustBg);
$(window).scroll(adjustBg);

/* jQuery Add Image Title Attribute from Alt by https://stackoverflow.com/questions/29765000/jquery-add-image-title-attribute-from-alt */
$('img').each(function () {
  if (!$(this).attr('title') && $(this).attr('alt')) {
    $(this).attr('title', $(this).attr('alt'));
  }
})

/* Smooth Scrolling by https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});