//nav
var bodyClass = document.body.classList,
    lastScrollY = 0;
window.addEventListener('scroll', function(){
  var st = this.scrollY;
  if(st > 300){
  	bodyClass.add('navBackground');
  }else{
  	bodyClass.remove('navBackground');
  }
  if( st < lastScrollY) {
    bodyClass.remove('hide');
  }else{
	bodyClass.add('hide');
  }
  lastScrollY = st;
});

//scrolling

var windowHeight;
var jsScrollingContent = $('.scrollingContent');
var jsProjectElement = $('.scrollingElement');


$(document).ready(function(){
	windowHeight = $(window).height();
	projectScrollInterval();
});


function projectScrollInterval() {
	scrollYPos = $(window).scrollTop();
	windowWidth = $(window).width();

	if(windowWidth > 768){
		jsProjectElement.each(function() {
      	projectPositionChecker($(this), scrollYPos);
      });
	}else{
		jsProjectElement.each(function(){
			dataActiveOn(jsProjectElement);
		})
	}
	

	setTimeout(function(){
		projectScrollInterval();
    }, 100);
}



function projectPositionChecker(e, y) {
	thisOffset = e.offset().top;
	if (thisOffset < y + windowHeight/1.2) {
		dataActiveOn(e);
	} else {
		dataActiveOff(e);
	}
}

function dataActiveOff(e) {
	e.attr('data-active', 'off');
}
function dataActiveOn(e) {
	e.attr('data-active', 'on');
}