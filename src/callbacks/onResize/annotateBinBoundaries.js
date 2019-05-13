import { set, nest } from 'd3';

export default function annotateBinBoundaries() {
    //Remove bin boundaries.
    this.svg.select('g.bin-boundaries').remove();

    //Check for repeats of values formatted with lower precision.
    const repeats = nest()
        .key(d => d.value1)
        .rollup(d => d.length)
        .entries(this.measure.binBoundaries)
        .some(d => d.values > 1);

    //Annotate bin boundaries.
    const axis = this.svg.append('g').classed('bin-boundaries axis', true);
    const ticks = axis
        .selectAll('g.bin-boundary')
        .data(this.measure.binBoundaries)
        .enter()
        .append('g')
        .classed('bin-boundary tick', true);
    const texts = ticks
        .append('text')
        .attr({
            x: d => this.x(d.value),
            y: this.y(0),
            dy: '16px',
            'text-anchor': 'middle'
        })
        .text(d => (repeats ? d.value2 : d.value1));
}
