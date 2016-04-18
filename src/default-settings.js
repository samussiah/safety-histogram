const settings = {
    //Addition settings for this template
    id_col: "USUBJID",
    time_col: "VISITN",
    measure_col: "TEST",
    value_col: "STRESN",
    unit_col: "STRESU",
    sex_col:"SEX",
    race_col:"RACE",
    normal_col_low: "STNRLO",
    normal_col_high: "STNRHI",
    start_value: null,
    rotateX: true,
    missingValues: ["NA",""],

    //Standard webcharts settings
    x:{
        "label":null,
        "type":"linear",
        "bin":25, 
        "behavior":'flex', 
        "format":'.1f'
    },
    y:{
        "label":"# of Measures",
        "type":"linear",
        "behavior": 'flex',
        "column":"",
        "domain":[0,null]
    },
    marks:[
        {   
            "per":[],
            "type":"bar",
            "summarizeY":"count",
            "summarizeX":"mean",
            "attributes":{"fill-opacity":0.75}
        }
    ],
    "legend":{
        "mark":"square",
        "label":"cohort"
    },
    "aspect":1.66,
    "max_width":"800"
};

// Replicate settings in multiple places in the settings object
export function syncSettings(settings){
	settings.x.label = settings.start_value;
	settings.x.column = settings.value_col;
	settings.marks[0].per[0] = settings.value_col;
	
	return settings;
}

// Default Control objects
export const controlInputs = [ 
	{label: "Lab Test", type: "subsetter", value_col: "TEST", start: null},
    {label: "Sex", type: "subsetter", value_col: "SEX"},
    {label: "Race", type: "subsetter", value_col: "RACE"},
    {label: "Visit", type: "subsetter", value_col: "VISITN"}
];

// Map values from settings to control inputs
export function syncControlInputs(controlInputs, settings){
	controlInputs[0].value_col = settings.measure_col;
	controlInputs[0].start = settings.start_value;   
    controlInputs[1].value_col = settings.sex_col;    
    controlInputs[2].value_col = settings.race_col;
    controlInputs[3].value_col = settings.time_col;
 
	return controlInputs
}

export default settings
