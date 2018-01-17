(function($) {

    $(document).on("scroll", function(){
        if($(document).scrollTop() > 500){
            $("header").addClass("open");
            $("header").slideDown("slow");
            $("sidenav").show();
        } else {
            $("header").removeClass("open");
            $("header").slideUp("slow");
            $("sidenav").hide();
        }
    });
    
})(jQuery); // End of use strict

