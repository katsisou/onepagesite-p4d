/*mouse sensor*/

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
       
/*image disapper by click*/
       function makeInvisible() {
        document.getElementById("display").className = "hidden";
    }

    
    function yourFunction(){
        //here is you need to add style for img1 like  display block aaa img2 is 
        //display none !
        document.querySelector(".bwheart").style.display = 'block'
        document.querySelector(".redheart").style.display = 'none'
    }

    