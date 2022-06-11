  //js about menubar effect on scroll:
  window.addEventListener("scroll", function(){
    var Header = document.querySelector("header");
    Header.classList.toggle('sticky', window.scrollY > 0);
});
  //js for responsive navigation sidebar  menu:
  var Menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", () => {
      Menu.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
      Menu.classList.remove("active");
  });

  