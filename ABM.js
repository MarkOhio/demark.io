// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
            


           
 

 // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Get the modal fr the about
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// the one fr the more one art
function openModal() {
  document.getElementById("myModalmi").style.display = "block";
}

function closeModal() {
  document.getElementById("myModalmi").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// Get the modal fr the follow us
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// // for the button that opens a pic onole when u click it
// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }
// *{box-sizing: border-box;}

// /* Button used to open the contact form - fixed at the bottom of the page */
// .open-button {
//   background-color: #555;
//   color: white;
//   padding: 16px 20px;
//   border: none;
//   cursor: pointer;
//   opacity: 0.8;
//   width: 280px;
  
// }

// /* The popup form - hidden by default */
// .form-popup {
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   box-shadow: 0px 8px 16px 0px rgb(0, 0, 0);
//   z-index: 1;
//   font-family: cursive;
//   margin-bottom: 0px;
//   border: 3px solid #f1f1f1;

// }

// /* Add styles to the form container */
// .form-container {
//   max-width: 300px;
//   padding: 10px;
  
//   background-color: white;
//   -webkit-transform: translateY(-50%);
//   -ms-transform: translateY(-100%);
//   transform: translateY(-85%);
// }




// /* Set a style for the submit/login button */
// .form-container .btn {
//   background-color: #4CAF50;
//   color: white;
//   padding: 16px 20px;
//   border: none;
//   cursor: pointer;
//   width: 100%;
//   margin-bottom:10px;
//   opacity: 0.8;
// }

// /* Add a red background color to the cancel button */
// .form-container .cancel {
//   background-color: red;
//   padding: 16px 20px;
//   border: none;
//   cursor: pointer;
 

// }

// /* Add some hover effects to buttons */
// .form-container .btn:hover, .open-button:hover {
//   opacity: 1;
// }