prism.on('dashboardloaded', (event, args) => {

	args.dashboard.on('widgetprocessresult', function (w, args) {

		//main

		let widgetType = args.widget.manifest.name;
		let shouldApplyGlobalChartOptions = lookup(applyGlobalOptionsToChartType, widgetType);

		if (shouldApplyGlobalChartOptions){
			args.options = applyHighchartsOptions(globalChartOptions, args.options);
		}



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
			console.log(args);
		}

	});
});