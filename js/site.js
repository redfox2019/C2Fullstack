   $(function() {
       var stickyNavTop = $('.topnav').offset().top;

       var stickyNav = function(){
          var scrollTop = $(window).scrollTop();              
           if (scrollTop > stickyNavTop) { 
               $('.topnav').addClass('sticky');
           } else {
               $('.topnav').removeClass('sticky'); 
           }
       };
       stickyNav();
       $(window).scroll(function() {
           stickyNav();
       });
   });

$(document).on('keyup', '#email', function() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.value);
    if(!re && ! this.value==""){
        $(".inputimg-error").removeClass("dontShow")
        $(".inputimg-error").addClass("show")
        $(".inputimg-valid").removeClass("show");
        $(".inputimg-valid").addClass("dontShow");
        
    }
    else{
        $(".inputimg-error").removeClass("show");
        $(".inputimg-error").addClass("dontShow");
        $(".inputimg-valid").addClass("show")
        $(".inputimg-valid").removeClass("dontShow")
    }
    
});

$(document).on('click', "#submitButton", function(){
    var x = $("#email").val();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(x);
    if(!re && ! this.value==""){
        alert("Email is required");
        $(".inputimg-error").removeClass("dontShow")
        $(".inputimg-error").addClass("show")
        $(".inputimg-valid").removeClass("show");
        $(".inputimg-valid").addClass("dontShow");
    }
    else{
        $(".content").hide();
        $(".Thankyou").removeClass("dontShow")
    }
});

function mobileSwitch() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
