//for slick carousel
//jQuery(document).ready(function ($) {
//	  $('.hero').slick({
//		dots: true,
//        infinite: true,
//        speed: 500,
//        fade: !0,
//        cssEase: 'linear',
//		slidesToShow: 1,
//		slidesToScroll: 1,
//        autoplay: true,
//		autoplaySpeed: 8000,
//        draggable: false,
//		arrows: false,
//		responsive: [
//	    {
//		breakpoint: 1024,
//		settings: {
//		slidesToShow: 1,
//		slidesToScroll: 1,
//        infinite: true
//		          }
//        },
//        {
//		breakpoint: 768,
//		settings: {
//        draggable: true,
//		          }
//		},
//		{
//		breakpoint: 600,
//		settings: {
//        slidesToShow: 1,
//        draggable: true,
//		slidesToScroll: 1
//			      }
//		},
//		{
//		breakpoint: 480,
//		settings: {
//        slidesToShow: 1,
//        draggable: true,
//		slidesToScroll: 1
//		          }
//		}
//	
//			      ]
//                  });
//        });		
//
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// function getSteamId(){
    
//   var mySteamId = document.getElementById('steamId').value;
//   return mySteamId;
// }
// export { getSteamId };