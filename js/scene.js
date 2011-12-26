(function(){
	window.Constellation = function(elementId, w, h, numberOfStars){
		var paper = Raphael(elementId, w, h);
		for (index = 0; index < numberOfStars; index++) {
			paper.circle(Math.random() * w, Math.random() * h, 1 + 3 * Math.random())
				.attr({fill: "white", stroke: "white"});
		}
	};

	window.Moon = function(elementId){
		var size = $('#' + elementId).width();
		Raphael(elementId, size, size)
			.circle(size/2, size/2, size/2)
			.attr({fill: "yellow", stroke: "yellow"});						
	};
	
	window.Cloud = function(elementId, w, h){
		var alpha = 4/10 + 4/10 * Math.random();
		var r1 = h/2, x1 = w - r1, y1 = r1;
		var r0 = alpha * r1, x0 = r0, y0 = h - r0;
		var x2 = (x0 + x1) / 2, y2 = (y1 - y0) / (x1 - x0) * (x2 - x0) + y0, r2 = h - y2;
	
		var color = "rgba(128, 128, 128, 0.75)";
		var attributes = {fill: color, stroke: color};

		var cloudPaper = Raphael(elementId, w, h);
		cloudPaper.circle(x1,y1,r1).attr(attributes);
		cloudPaper.circle(x0, y0, r0).attr(attributes);
		cloudPaper.circle(x2, y2, r2).attr(attributes);
	};

	window.prepareWeather = function(numberOfLayers, numberOfCloudsPersLayer){
		$(".weather").each(function(index, element){
			var weather = $(element);
			for (var index = 0; index < numberOfLayers; index++) {
				weather.append("<div class='layer'></div>");
			}
		});
		$(".weather .layer").each(function(index, element){
			var layer = $(element)
			layer.attr("id", "layer" + index);
			var position = layer.position();
			layer.css({top: position.top + 10 * index});
			for (var index = 0; index < numberOfCloudsPerLayer; index++) {
				layer.append("<div class='cloud'></div>");
			}
		});
	};

	window.makeClouds = function(){
		$(".cloud").each(function(index, element){
			var elementId = "cloud" + index;
			$(element).attr("id", elementId);
			$(element).css({left: Math.random() * screen.width});
			new Cloud(elementId, 200, 100);
		});
	};

	window.animateClouds = function(numberOfLayers){
		for (index = 0; index < numberOfLayers; index++) {
			var dt = 10000 * (1 - index / numberOfLayers);
			var manager = new jsAnimManager(40);
			var anim = manager.createAnimObject('layer' + index);
			anim.add({property: Prop.left, from: 0, to: screen.width, duration: dt});
		}				
	};
})();

