var requestParameters = (function(){
	return function()	{
		var parameters = {};
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var index = 0; index < hashes.length; index++) {
		    var hash = hashes[index].split('=');
		    parameters[hash[0]] = hash[1];
		}
		return parameters;
	}
})();

