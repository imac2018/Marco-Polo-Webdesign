/* fixed route element with scroll event */
var sectionTop_1 = document.body.querySelector('#section-1').offsetTop;
var routeElm = document.body.querySelector('ul.route');

window.addEventListener('scroll', function(event){
  event.preventDefault();
  if(sectionTop_1 < window.scrollY){
    routeElm.style.position = 'fixed';
    routeElm.style.top = '35vh';
  }else{
    routeElm.style.position = 'absolute';
    routeElm.style.top = '135vh';
  }
});
document.body.querySelector('.header button').addEventListener('click', function(){
  fullpage.moveSectionDown();
});

document.body.querySelector('#section-1 button').addEventListener('mouseenter', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = 'url("../images/bg_asia.jpg")';
});
document.body.querySelector('#section-1 button').addEventListener('mouseleave', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = '#f77363';
});
