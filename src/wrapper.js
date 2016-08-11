import { createChart, createControls, createTable } from 'webcharts';
import { syncControlInputs, syncSettings } from './default-settings'
import config from './default-settings';
import onInit from './onInit';
import onLayout from './onLayout';
import onPreprocess from './onPreprocess';
import onDataTransform from './onDataTransform';
import onDraw from './onDraw';
import onResize from './onResize';
import './util/object-assign';

export default function safetyHistogram(element, settings) {
  //Merge user's settings with default settings.
    let mergedSettings = Object.assign({}, config, settings);

  //Keep settings in sync with the data mappings.
    mergedSettings = syncSettings(mergedSettings);

  //Keep control inputs in sync and create controls object.
    let syncedControlInputs = syncControlInputs(mergedSettings);
    let controls = createControls(element, {location: 'top', inputs: syncedControlInputs});

  //Define chart
    let chart = createChart(element, mergedSettings, controls);
    chart.on('init', onInit);
    chart.on('layout', onLayout);
    chart.on('preprocess', onPreprocess);
    chart.on('datatransform', onDataTransform);
    chart.on('draw', onDraw);
    chart.on('resize', onResize);

    let table = createTable
        (element
        ,mergedSettings.detail_cols && mergedSettings.detail_cols.length > 0 ?
            {cols: mergedSettings.detail_cols} :
            null)
        .init([]);
    chart.table = table;

    return chart;
}
