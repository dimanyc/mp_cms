
$(function(){
  $(".slides").slidesjs({
    width: 470,
    height: 270,
    start: 1,
    navigation: {
      active: false,
        // [boolean] Generates next and previous buttons.
        // You can set to false and use your own buttons.
        // User defined buttons must have the following:
        // previous button: class="slidesjs-previous slidesjs-navigation"
        // next button: class="slidesjs-next slidesjs-navigation"
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    },
  });


  // $('.myNext').click(function() {
  //   $('.slidejs-next').trigger('click');
  // });

});