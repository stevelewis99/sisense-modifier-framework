/* start of stuff that could be put in external js files - if I can work out how to import them so they actually work! */

/* helpers.6.js */

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

const setWidgetFullHeight = (el) => {
	var $c = $('.widget-body', el.chart);
	$c.each(function(){
			this.style = "height: 100%";
	});
}

/* chartOptions.6.js */

const applyGlobalOptionsToChartType = {
    "chart/pie": true,
    "chart/bar": true,
    "chart/column": true,
    "chart/polar": true,
    "chart/line": true,
    "chart/area": true,
    "chart/scatter": true,
	"chart/boxplot": true,
	"chart/funnel": true
};

const globalChartOptions = {
    "chart": {
        "spacing": [20, 10, 10, 10],
        "backgroundColor": "#330000"
    }
};

// const pieChartOptions = {
//     "chart": {
//         "spacing": [20, 10, 10, 10],
//         "backgroundColor": "#ff0000"
//     }
// };

/* end of stuf that should be in external files */


prism.on('dashboardloaded', (event, args) => {

	args.dashboard.on('widgetprocessresult', function (dash, w) {

		//main

		let widgetType = w.widget.manifest.name;
		let shouldApplyGlobalChartOptions = lookup(applyGlobalOptionsToChartType, widgetType);

		if (shouldApplyGlobalChartOptions){
			w.widget.on('beforeviewloaded', function(widget, element){
				//console.log(widget, element);
				element.options = applyHighchartsOptions(globalChartOptions, element.options);
			});
		}

		w.widget.on('domready', setWidgetFullHeight); 




		if (widgetType.indexOf("chart/bar") != -1 || widgetType.indexOf("chart/column") != -1 || widgetType.indexOf("chart/polar") != -1 || widgetType.indexOf("chart/line") != -1 || widgetType.indexOf("chart/area") != -1 || widgetType.indexOf("chart/scatter") != -1) {

			// if (args.result.xAxis && args.result.xAxis.categories) {
			// 	args.result.xAxis.categories.forEach(
			// 		function (category, index, categories) {
			// 			let swappedValue = lookup(prism.dataDictionary, category);
			// 			if (typeof swappedValue != 'undefined') {
			// 				categories[index] = swappedValue;
			// 			}
			// 			//console.log(categories[index]);

			// 		});
			// 	//console.log(args);
			// }

			// if (usesPanel(args.widget.metadata.panels, "break by")) {
			//     if (args.result.series) {
			//         args.result.series.forEach(
			//             function (s, i, series) {
			//                 if (s.name) {
			//                     let swappedValue = lookup(prism.dataDictionary, s.name);
			//                     if (typeof swappedValue != 'undefined') {
			//                         series[i].name = swappedValue;
			//                         //console.log(swappedValue, ss[j].name);
			//                     }
			//                 }
			//             }
			//         );
			//     }
			//     //console.log(args);

			// }



			// if (widgetType.indexOf("chart/scatter") != -1) {
			//     if (args.result.yAxis) {
			//         args.result.yAxis.forEach(
			//             function (axis, i, axes) {
			//                 if (axis.categories) {
			//                     axis.categories.forEach(
			//                         function (category, index, categories) {
			//                             let swappedValue = lookup(prism.dataDictionary, category);
			//                             if (typeof swappedValue != 'undefined') {
			//                                 categories[index] = swappedValue;
			//                             }
			//                             //console.log(categories[index]);
			//                         });
			//                 }
			//             });
			//     }
			// };

		}
		// else if (widgetType.indexOf("chart/pie") != -1) {
		//     if (args.result.series) {
		//         args.result.series.forEach(
		//             function (s, i, series) {
		//                 if (s.data) {
		//                     s.data.forEach(
		//                         function (dataItem, j, ss) {
		//                             let swappedValue = lookup(prism.dataDictionary, dataItem.name);
		//                             if (typeof swappedValue != 'undefined') {
		//                                 ss[j].name = swappedValue;
		//                                 //console.log(swappedValue, ss[j].name);
		//                             }
		//                         });
		//                 }
		//             }
		//         );
		//     }
		// }
		// else if (widgetType.indexOf("pivot") != -1) {
		//     console.log(args.widget.manifest.name, args.widget);
		//     args.widget.transformPivot(
		//         {
		//             type: ['member']
		//         },
		//         function swapCellContent(metadata, cell) {
		//             let swappedValue = lookup(prism.dataDictionary, cell.content);
		//             if (typeof swappedValue != 'undefined') {
		//                 cell.content = swappedValue;
		//                 //console.log(cell);
		//             }
		//         },
		//         {
		//             pluginKey: 'dataSwapper'
		//         }
		//     );
		// }
		// else if (widgetType.indexOf("tablewidget") != -1) {
		//     if (args.result.$$rows) {
		//         args.result.$$rows.forEach(
		//             function (r, i, rows) {
		//                 r.forEach(
		//                     function (rowColumn, j, cols) {
		//                         let swappedValue = lookup(prism.dataDictionary, rowColumn.text);
		//                         if (typeof swappedValue != 'undefined') {
		//                             cols[j].text = swappedValue;
		//                             //console.log(swappedValue, cols[j].text);
		//                         }
		//                     });
		//             }
		//         );
		//     }
		// }
		else {
			console.log(widgetType);
		}

	});
});