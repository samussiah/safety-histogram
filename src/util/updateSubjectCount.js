// Takes a webcharts object creates a text annotation giving the 
// number and percentage of observations shown in the current view 
// inputs:
// chart - a webcharts chart object
// id_col - a column name in the raw data set (chart.raw_data) representing the observation of interest
// id_unit - a text string to label the units in the annotation (default = "participants")
// selector - css selector for the annotation
export default function updateSubjectCount(chart, selector, id_unit) {
    //count the number of unique ids in the current chart and calculate the percentage
    var currentObs = d3.set(chart.filtered_data.map(function (d) {
        return d[chart.config.id_col];
    })).values().length;
    var percentage = d3.format('0.1%')(currentObs / chart.populationCount);

    //clear the annotation
    var annotation = d3.select(selector);
    d3.select(selector).selectAll("*").remove();

    //update the annotation
    var units = id_unit ? " "+id_unit : " participant(s)"
    annotation.text('\n' + currentObs + " of " + chart.populationCount + units +" shown (" + percentage + ")");
}