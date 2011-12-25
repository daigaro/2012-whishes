(function(){
	window.Moon = function(elementId){
		var size = $('#' + elementId).width();
		Raphael(elementId, size, size)
			.circle(size/2, size/2, size/2)
			.attr({fill: "yellow", stroke: "yellow"});						
	};
	
	window.Cloud = function(elementId, w, h){
		var r1 = h/2, x1 = w - r1, y1 = r1;
		var r0 = 6 / 10 * r1, x0 = r0, y0 = h - r0;
		var x2 = (x0 + x1) / 2, y2 = (y1 - y0) / (x1 - x0) * (x2 - x0) + y0, r2 = h - y2;

		var cloudPaper = Raphael(elementId, w, h);
		cloudPaper.circle(x1,y1,r1).attr({fill: "gray", stroke: "gray"});
		cloudPaper.circle(x0, y0, r0).attr({fill: "gray", stroke: "gray"});
		cloudPaper.circle(x2, y2, r2).attr({fill: "gray", stroke: "gray"});
	};

	window.prepareWeather = function(numberOfLayers, numberOfCloudsPersLayer){
		$(".weather").each(function(index, element){
			var weather = $(element);
			for (var index = 0; index < numberOfLayers; index++) {
				weather.append("<div class='layer'></div>");
			}
		});
		$(".weather .layer").each(function(index, element){
			$(element).attr("id", "layer" + index);
			for (var index = 0; index < numberOfCloudsPerLayer; index++) {
				$(element).append("<div class='cloud'></div>");
			}
		});
	};
})();

