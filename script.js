//QUERY STYLE
$(document).ready(function(){

    // TYPEWRITER ////////////////////////////////////////////////////////////////////////////

  $(function(){
      $(document).scroll(function(){
        let $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  $(function(){
    $('#enfin1').toggleClass('shade-in_medium');
    $('#enfin2').hide();
    $('#enfin2').toggleClass('shade-in_medium');
    setTimeout(function () {
      $("#enfin2").show();
    }, 2000);
  });

  //   setTimeout(function () {
  //     $("#some-element").css("backgroundColor", "red");
  // }, 5000);

  $(function(){
    let $nav = $("#keywords");
    $nav.hide();
    $(document).scroll(function () {
      $nav.toggleClass('typewrited_start', $(this).scrollTop() > 600);
      // $nav.toggleClass('typewrited_start', $(this).scrollTop() > $nav.height());
        setTimeout(function () {
          $($nav).show();
        },500);
    });
  });

  $(function(){
    let $nav = $(".tasks");
    $nav.hide();
    $(document).scroll(function () {
      $nav.toggleClass('typewrited_start', $(this).scrollTop() > 1000);
      // $nav.toggleClass('typewrited_start', $(this).scrollTop() > $nav.height());
        setTimeout(function () {
          $($nav).show();
        },500);
    });
  });


});