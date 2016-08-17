
export default {
	dataMappings : [
	//custom settings
	{
		source: 'id_col',
		target: 'id_col'
	},
	{
		source: 'time_col',
		target: 'time_col'
	},
	{
		source: 'measure_col',
		target: 'measure_col'
	},
	{
		source: 'value_col',
		target: 'value_col'
	},
	{
		source: 'unit_col',
		target: 'unit_col'
	},
	{
		source: 'sex_col',
		target: 'sex_col'
	},
	{
		source: 'race_col',
		target: 'race_col'
	},
	{
		source: 'normal_col_low',
		target: 'normal_col_low'
	},
	{
		source: 'normal_col_high',
		target: 'normal_col_high'
	},
	{
		source: 'start_value',
		target: 'start_value'
	},
	{
		source: 'rotate_x',
		target: 'rotateX'
	},
	{
		source: 'missing_values',
		target: 'missingValues'
	},
	// webcharts settings
		{
			source:"x",
			target:"x.column"
		},
		{
			source:"x_order",
			target:"x.order"
		},
		{
			source:"x_domain",
			target:"x.domain"
		},
		{
			source:"y",
			target:"y.column"
		},
		{
			source:"y_order",
			target:"y.order"
		},
		{
			source:"y_domain",
			target:"y.domain"
		},
		{
			source:"group",
			target:"marks.0.per"
		},
		{
			source:"subgroup",
			target:"marks.0.split"
		},
		{
			source:"subset",
			target:"marks.0.values"
		},
		{
			source:"group2",
			target:"marks.1.per"
		},
		{
			source:"subgroup2",
			target:"marks.1.split"
		},
		{
			source:"subset2",
			target:"marks.1.values"
		},
		{
			source:"color_by",
			target:"color_by"
		},
		{
			source:"legend_order",
			target:"legend.order"
		},
		{
			source:"tooltip",
			target:"marks.0.tooltip"
		}
	],
	chartProperties: [
		{
			source:"date_format",
			target:"date_format"
		},
		{
			source:"x_label",
			target:"x.label"
		},

		{
			source:"x_type",
			target:"x.type"
		},
		{
			source:"x_format",
			target:"x.format"
		},
		{
			source:"x_sort",
			target:"x.sort"
		},
		{
			source:"x_bin",
			target:"x.bin"
		},
		{
			source:"x_behavior",
			target:"x.behavior"
		},
		{
			source:"y_label",
			target:"y.label"
		},
		{
			source:"y_type",
			target:"y.type"
		},
		{
			source:"y_format",
			target:"y.format"
		},
		{
			source:"y_sort",
			target:"y.sort"
		},
		{
			source:"y_bin",
			target:"y.bin"
		},
		{
			source:"y_behavior",
			target:"y.behavior"
		},
		{
			source:"marks_type",
			target:"marks.0.type"
		},
		{
			source:"marks_summarizeX",
			target:"marks.0.summarizeX"
		},
		{
			source:"marks_summarizeY",
			target:"marks.0.summarizeY"
		},
		{
			source:"marks_arrange",
			target:"marks.0.arrange"
		},
		{
			source:"marks_fill_opacity",
			target:"marks.0.attributes.fill-opacity"
		},
		{
			source:"marks_tooltip",
			target:"marks.0.tooltip"
		},
		{
			source:"marks_text",
			target:"marks.0.text"
		},
		{
			source:"marks2_type",
			target:"marks.1.type"
		},
		{
			source:"marks2_summarizeX",
			target:"marks.1.summarizeX"
		},
		{
			source:"marks2_summarizeY",
			target:"marks.1.summarizeY"
		},
		{
			source:"marks2_arrange",
			target:"marks.1.arrange"
		},
		{
			source:"marks2_fill_opacity",
			target:"marks.1.attributes.fill-opacity"
		},
		{
			source:"marks2_tooltip",
			target:"marks.1.tooltip"
		},
		{
			source:"marks2_text",
			target:"marks.1.text"
		},
		{
			source:"transitions",
			target:"transitions"
		},
		{
			source:"aspect_ratio",
			target:"aspect"
		},
		{
			source:"range_band",
			target:"range_band"
		},
		{
			source:"colors",
			target:"colors"
		},
		{
			source:"gridlines",
			target:"gridlines"
		},
		{
			source:"max_width",
			target:"max_width"
		},
		{
			source:"width",
			target:"width"
		},
		{
			source:"height",
			target:"height"
		},
		{
			source:"margin_top",
			target:"margin.top"
		},
		{
			source:"margin_bottom",
			target:"margin.bottom"
		},
		{
			source:"margin_left",
			target:"margin.left"
		},
		{
			source:"margin_right",
			target:"margin.right"
		},
		{
			source:"resizable",
			target:"resizable"
		},
		{
			source:"scale_text",
			target:"scale_text"
		},
		{
			source: "legend_mark",
			target: "legend.mark"
		},
		{
			source: "legend_label",
			target: "legend.label"
		},
		{
			source: "legend_location",
			target: "legend.location"
		}
	]
}