/*navigator scroll */
$('#sec-1').addClass("active");


      $("#sec-1").click(function() {
           $('html, body').animate({
               scrollTop:        $("#one").offset().top-66
           }, 1000);
        return false;
       });
      
      $("#sec-2").click(function() {
           $('html, body') .animate({
               scrollTop:        $("#two").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#sec-3").click(function() {
           $(' html,body') .animate({
               scrollTop:        $("#three").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#sec-4").click(function() {
        $(this).addClass("active");
           $('html,body ') .animate({
               scrollTop:        $("#four").offset().top-112
           }, 1000);
        return false;
       });

       /*back to top of page*/
       const scrollTopButton = document .querySelector('.scroll-top');
       scrollTopButton.addEventListener('click', ()=> {
        window.scrollTo(0, 0);
       })

    /*click to change heart imgs*/
    function makeInvisible(){
        document.querySelector(".bwheart").style.display = 'none'
        document.querySelector(".redheart").style.display = 'block'
    }

    
    

    