(function(){
	window.Moon = function(elementId){
		var size = $('#' + elementId).width();
		Raphael(elementId, size, size)
			.circle(size/2, size/2, size/2)
			.attr({fill: "yellow", stroke: "yellow"});						
	};
})();

