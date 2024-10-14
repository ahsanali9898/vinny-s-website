let nav = document.querySelector(".navigation-wrap");
  window.onscroll= function (){
      if(document.documentElement.scrollTop > 100){
          nav.classList.add("scroll-on");
         }
         else{
          nav.classList.remove("scroll-on");
         }
  }


  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("caption");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
