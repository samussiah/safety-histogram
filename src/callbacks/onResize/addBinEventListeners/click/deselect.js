export default function deselect(element, d) {
    const safetyHistogram = this.sh ? this.sh : this;

    delete safetyHistogram.highlightedBin;
    delete safetyHistogram.highlighteD;

    safetyHistogram.listing.draw([]);
    safetyHistogram.listing.wrap.style('display', 'none');

    this.svg.selectAll('.bar').attr('fill-opacity', 0.75);
    if (
        safetyHistogram.config.draw_multiples &&
        safetyHistogram.multiples &&
        safetyHistogram.multiples.multiples
    ) {
        safetyHistogram.multiples.multiples.forEach(multiple => {
            multiple.svg.selectAll('.bar').attr('fill-opacity', 0.75);
        });
    }

    safetyHistogram.footnotes.barClick
        .style({
            cursor: 'normal',
            'text-decoration': 'none'
        })
        .text('Click a bar for details.');

    safetyHistogram.footnotes.barDetails.text(
        `${d.values.raw.length} records with ` +
            `${safetyHistogram.measure.current} values from ` +
            `${safetyHistogram.config.x.d3format1(
                d.rangeLow
            )} to ${safetyHistogram.config.x.d3format1(d.rangeHigh)}`
    );
}
