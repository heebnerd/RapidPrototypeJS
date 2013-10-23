var snapSelector;
var y_points = [];
var x_points = [];


$(document).ready(function(snapNdrag, $, undefined){
	snapNdrag.Selector = function(s){
		snapSelector = s;
		RefreshPoints();
	}
}( window.snapSelector = window.snapSelector || {}, jQuery ));

function RefreshPoints() {
	$(snapSelector).each(function(){
  		x_points.push($(this).position().left);
  		y_points.push($(this).position().top);
  	});
}