import { set } from 'd3';

export default function cleanData() {
    //Remove missing and non-numeric data.
    const preclean = this.raw_data;
    const clean = this.raw_data.filter(d => /^-?[0-9.]+$/.test(d[this.config.value_col]));
    const nPreclean = preclean.length;
    const nClean = clean.length;
    const nRemoved = nPreclean - nClean;

    //Warn user of removed records.
    if (nRemoved > 0)
        console.warn(
            `${nRemoved} missing or non-numeric result${nRemoved > 1
                ? 's have'
                : ' has'} been removed.`
        );

    //Preserve cleaned data.
    this.raw_data = clean;
    this.super_raw_data = this.raw_data;
    this.initial_data = this.raw_data;

    //Attach array of continuous measures to chart object.
    this.measures = set(this.raw_data.map(d => d[this.config.measure_col]))
        .values()
        .sort();
}
