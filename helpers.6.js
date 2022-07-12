const lookup = (obj, key) => {
	var type = typeof key;
	if (type == 'string' || type == "number") key = ("" + key).replace(/\[(.*?)\]/, function (m, key) {//handle case where [1] may occur
		return '.' + key;
	}).split('.');
	//console.log(key);
	for (var i = 0, l = key.length, currentkey; i < l; i++) {
		if (obj.hasOwnProperty(key[i])) obj = obj[key[i]];
		else return undefined;
	}
	return obj;
}

//determine if chart uses a break by. should take in metadata.panels as parameter
const usesPanel = (panels, targetPanel) => {
	var breaks = panels.filter(function (entry) {
		if (entry.title == targetPanel) {
			return entry
		}
	});
	if (breaks && breaks[0] && breaks[0].items && breaks[0].items.length == 0) {
		return false
	} else {
		return true
	}
};

const applyHighchartsOptions = (newChartOptions, existingChartOptions) => {
    let options = $.extend(true, existingChartOptions, newChartOptions);
    return options;
}