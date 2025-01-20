// header start from here

(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery


// header end 


// slider start 


















$('.owl-carousel').owlCarousel({
      rtl:true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1100:{
              items:3
          },

          1300:{
            items:4
        }
      }
  })
  
  
  // slider end 



  // 





//   const btns = document.querySelectorAll(".acc-btn");

// // fn
// function accordion() {
//   // this = the btn | icon & bg changed
//   this.classList.toggle("is-open");

//   // the acc-content
//   const content = this.nextElementSibling;

//   // IF open, close | else open
//   if (content.style.maxHeight) content.style.maxHeight = null;
//   else content.style.maxHeight = content.scrollHeight + "px";
// }

// // event
// btns.forEach((el) => el.addEventListener("click", accordion));


// header code 




// function myMap() {
//   var mapProp= {
//     center:new google.maps.LatLng(51.508742,-0.120850),
//     zoom:5,
//   };
//   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//   }



AOS.init({
  delay: 200,
  offset: 300,
  duration: 1100
});


