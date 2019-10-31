export default function addParticipantCountContainer() {
    this.participantCount.container = this.controls.wrap
        .style('position', 'relative')
        .append('div')
        .attr('id', 'participant-count')
        .style({
            position: 'absolute',
            'font-style': 'italic',
            bottom: '0px',
            left: 0,
            display: this.variables.optional.find(definition => definition.property === 'id_col')
                .missing
                ? 'none'
                : 'block'
        });
}
