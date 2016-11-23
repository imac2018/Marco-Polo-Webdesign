/* fixed route element with scroll event */
var sectionTop_1 = document.body.querySelector('section#section-1').offsetTop;
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
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
/*
document.body.querySelector('header a[href="#section-1"]').addEventListener('click', function(event){
  event.preventDefault();
  eventFire(document.querySelector('a[href="#section-2"]'), 'click');
});
*/
