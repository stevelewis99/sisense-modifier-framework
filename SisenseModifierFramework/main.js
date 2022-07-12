swapData = function (dashboard, ignoreList) {

dashboard.on('widgetprocessresult', function(w,args){
		
	var dict = require('dictionary.json');
	
	function lookup (obj, key) {
		var type = typeof key;
		if (type == 'string' || type == "number") key = ("" + key).replace(/\[(.*?)\]/, function(m, key){//handle case where [1] may occur
			return '.' + key;
		}).split('.');
		for (var i = 0, l = key.length, currentkey; i < l; i++) {
			if (obj.hasOwnProperty(key[i])) obj = obj[key[i]];
			else return undefined;
		}
		return obj;
	}

	//main
	if (ignoreList.indexOf(args.widget.oid)==-1){
		/*if (args.widget.manifest.name== "chart/column" || args.widget.manifest.name== "chart/bar" || args.widget.manifest.name=="chart/polar" ){
			if (usesPanel(args.widget.metadata.panels, "break by")){
				colorColumnWithBreak();
			} else {
				colorColumnNoBreak();
			}
		} else if (args.widget.manifest.name== "chart/pie") {
			colorPie();
		} else if (args.widget.manifest.name=="chart/line" || args.widget.manifest.name =="chart/area" && usesPanel(args.widget.metadata.panels, "break by")){
			colorLine();
		} else if (args.widget.manifest.name=="chart/scatter" && usesPanel(args.widget.metadata.panels,"Break By / Color")) {
			 colorScatterChart();
		}*/
		args.result.series.forEach(element => {
			console.log(element);
		});

	}
});
}
