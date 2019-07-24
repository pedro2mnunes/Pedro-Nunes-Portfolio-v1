$(document).ready(function() {
var $header = $('header');
var $sticky = $header.before($header.clone().addClass("sticky"));
$(window).on("scroll",function(){
var scrollFromTop =$(window).scrollTop(); /* scrollTop() is a jQuery method*/
$("body").toggleClass("scroll",(scrollFromTop > 350));
});

});

