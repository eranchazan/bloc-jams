


var animatePoints = function() 
      var points = document.getElementsByClassName('point');

var revealPoint = function(i) {
  points[i].style.color = "blue"
  points[i].style.height = 120px;
  points[i].style.opacity = 0.8;
  points[i].style.transform = "scaleX(2) translateY(0)";
  points[i].style.msTransform = "scaleX(1) translateY(0)";
  points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
}
 for(var i = 0; i < points.length; i++) {
        revialPoint(i);         
 };