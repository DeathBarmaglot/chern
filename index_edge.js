/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'back',
                type: 'image',
                rect: ['0px', '-12px','312px','221px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back.png",'0px','0px']
            },
            {
                id: 'Magical-Winter-photo-overlay-22_copy_22',
                type: 'image',
                rect: ['-3px', '-24px','312px','222px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Magical-Winter-photo-overlay-22%20copy%202.png",'0px','0px']
            },
            {
                id: 'Magical-Winter-photo-overlay-22_copy2',
                type: 'image',
                rect: ['2px', '-20px','312px','222px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Magical-Winter-photo-overlay-22%20copy.png",'0px','0px']
            },
            {
                id: 'stars',
                type: 'image',
                rect: ['61px', '14px','197px','161px','auto', 'auto'],
                opacity: 0.75,
                fill: ["rgba(0,0,0,0)",im+"stars.png",'0px','0px']
            },
            {
                id: 'Untitled-2',
                type: 'image',
                rect: ['16px', '3px','238px','187px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-2.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'photo',
                type: 'image',
                rect: ['0px', '3px','221px','179px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo.png",'0px','0px']
            },
            {
                id: 'date',
                type: 'image',
                rect: ['227px', '-6px','48px','56px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"date.png",'0px','0px']
            },
            {
                id: 'time',
                type: 'image',
                rect: ['221px', '-6px','89px','103px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"time.png",'0px','0px']
            },
            {
                id: 'Untitled-3',
                type: 'image',
                rect: ['2px', '-14px','312px','221px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-3.png",'0px','0px']
            },
            {
                id: 'Vector_Smart_Object-1',
                type: 'image',
                rect: ['-6px', '141px','312px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Vector%20Smart%20Object-1.png",'0px','0px']
            },
            {
                id: 'lenovo',
                type: 'image',
                rect: ['196px', '97px','130px','115px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lenovo.png",'0px','0px']
            },
            {
                id: 'Image',
                type: 'image',
                rect: ['33px', '140px','226px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"%D0%A0%D0%9E%D0%97%D0%86%D0%93%D0%A0%D0%90%D0%A8%D0%86%20%D0%9F%D0%A0%D0%98%D0%97%D0%86%D0%92%20%D0%A1%D0%95%D0%A0%D0%95%D0%94%20%D0%93%D0%9B%D0%AF%D0%94%D0%90%D0%A7%D0%86%D0%92.png",'0px','0px']
            },
            {
                id: 'LOGO',
                type: 'image',
                rect: ['85px', '37px','142px','139px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"LOGO.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Untitled-3}": [
                ["style", "top", '-14px'],
                ["style", "height", '221px'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["style", "width", '312px']
            ],
            "${_Magical-Winter-photo-overlay-22_copy2}": [
                ["style", "top", '-20px'],
                ["style", "opacity", '0'],
                ["style", "left", '2px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_time}": [
                ["style", "top", '-6px'],
                ["style", "left", '221px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,89,52.60009765625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,57.599853515625], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Untitled-2}": [
                ["style", "-webkit-transform-origin", [36.84,38.1], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [36.84,38.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [36.84,38.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [36.84,38.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [36.84,38.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '16px'],
                ["style", "width", '238px'],
                ["style", "top", '3px'],
                ["transform", "scaleY", '0.8'],
                ["style", "height", '187px']
            ],
            "${_Magical-Winter-photo-overlay-22_copy_22}": [
                ["style", "top", '-24px'],
                ["style", "opacity", '0'],
                ["style", "left", '-3px']
            ],
            "${_lenovo}": [
                ["style", "top", '97px'],
                ["style", "opacity", '0'],
                ["style", "left", '196px']
            ],
            "${_back}": [
                ["style", "top", '-12px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_stars}": [
                ["style", "top", '14px'],
                ["style", "opacity", '0'],
                ["style", "left", '61px']
            ],
            "${_date}": [
                ["style", "top", '-6px'],
                ["style", "height", '56px'],
                ["style", "opacity", '0'],
                ["style", "left", '227px'],
                ["style", "width", '48px']
            ],
            "${_Vector_Smart_Object-1}": [
                ["style", "top", '141px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "background-position", [343.2001953125,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-6px']
            ],
            "${_photo}": [
                ["style", "top", '3px'],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_LOGO}": [
                ["style", "top", '37px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '80px'],
                ["style", "clip", [0,142,83.800048828125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,146.39990234375], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Image}": [
                ["style", "top", '140px'],
                ["style", "opacity", '0'],
                ["style", "left", '33px'],
                ["style", "background-position", [-212,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
                { id: "eid3", tween: [ "transform", "${_photo}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 1250, easing: "easeInOutElastic" },
                { id: "eid77", tween: [ "style", "${_date}", "opacity", '1', { fromValue: '0'}], position: 2401, duration: 818, easing: "easeInOutElastic" },
                { id: "eid16", tween: [ "style", "${_Magical-Winter-photo-overlay-22_copy2}", "opacity", '0.75', { fromValue: '0'}], position: 1782, duration: 1218, easing: "easeInOutElastic" },
                { id: "eid18", tween: [ "transform", "${_LOGO}", "scaleY", '1.5', { fromValue: '1'}], position: 500, duration: 394, easing: "easeInOutElastic" },
                { id: "eid107", tween: [ "transform", "${_LOGO}", "scaleY", '0.95424', { fromValue: '1.5'}], position: 1952, duration: 231, easing: "easeOutCubic" },
                { id: "eid110", tween: [ "transform", "${_LOGO}", "scaleY", '1', { fromValue: '0.95424'}], position: 2183, duration: 170, easing: "easeOutCubic" },
                { id: "eid101", tween: [ "style", "${_Image}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-212,0]}], position: 4850, duration: 253, easing: "easeInOutElastic" },
                { id: "eid108", tween: [ "style", "${_LOGO}", "left", '169px', { fromValue: '80px'}], position: 1952, duration: 231, easing: "easeOutCubic" },
                { id: "eid111", tween: [ "style", "${_LOGO}", "left", '167px', { fromValue: '169px'}], position: 2183, duration: 170, easing: "easeOutCubic" },
                { id: "eid51", tween: [ "style", "${_Untitled-2}", "opacity", '0.35', { fromValue: '0'}], position: 2410, duration: 1607, easing: "swing" },
                { id: "eid118", tween: [ "style", "${_Untitled-2}", "opacity", '0', { fromValue: '0.35'}], position: 4457, duration: 1469, easing: "easeOutCubic" },
                { id: "eid116", tween: [ "style", "${_Untitled-2}", "opacity", '0.25', { fromValue: '0'}], position: 6685, duration: 1315, easing: "swing" },
                { id: "eid14", tween: [ "style", "${_Magical-Winter-photo-overlay-22_copy_22}", "opacity", '0.75', { fromValue: '0'}], position: 1782, duration: 1218, easing: "easeInOutElastic" },
                { id: "eid95", tween: [ "style", "${_back}", "opacity", '0.75', { fromValue: '0'}], position: 0, duration: 590, easing: "easeInOutElastic" },
                { id: "eid100", tween: [ "style", "${_Image}", "opacity", '1', { fromValue: '0'}], position: 4601, duration: 427, easing: "easeInOutElastic" },
                { id: "eid82", tween: [ "style", "${_time}", "clip", [0,89,103,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,89,52.60009765625,0]}], position: 2578, duration: 642, easing: "easeInOutElastic" },
                { id: "eid102", tween: [ "transform", "${_Untitled-2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 2183, duration: 1693, easing: "swing" },
                { id: "eid119", tween: [ "transform", "${_Untitled-2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 4250, duration: 1547, easing: "easeOutCubic" },
                { id: "eid117", tween: [ "transform", "${_Untitled-2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 6500, duration: 1385, easing: "swing" },
                { id: "eid92", tween: [ "style", "${_Vector_Smart_Object-1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [343.2001953125,0]}], position: 3391, duration: 609, easing: "easeInOutElastic" },
                { id: "eid81", tween: [ "style", "${_time}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,57.599853515625]}], position: 2578, duration: 642, easing: "easeInOutElastic" },
                { id: "eid4", tween: [ "transform", "${_photo}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 1250, easing: "easeInOutElastic" },
                { id: "eid22", tween: [ "style", "${_lenovo}", "opacity", '1', { fromValue: '0'}], position: 5307, duration: 443, easing: "easeInOutElastic" },
                { id: "eid24", tween: [ "style", "${_Vector_Smart_Object-1}", "opacity", '1', { fromValue: '0'}], position: 3478, duration: 362, easing: "easeInOutElastic" },
                { id: "eid76", tween: [ "style", "${_time}", "opacity", '1', { fromValue: '0'}], position: 2401, duration: 818, easing: "easeInOutElastic" },
                { id: "eid42", tween: [ "style", "${_stars}", "opacity", '0.75', { fromValue: '0'}], position: 1500, duration: 887, easing: "easeInOutElastic" },
                { id: "eid44", tween: [ "style", "${_stars}", "opacity", '0', { fromValue: '0.75'}], position: 2500, duration: 770, easing: "easeInOutElastic" },
                { id: "eid83", tween: [ "style", "${_stars}", "opacity", '0.75', { fromValue: '0'}], position: 4750, duration: 277, easing: "easeInOutElastic" },
                { id: "eid84", tween: [ "style", "${_stars}", "opacity", '0', { fromValue: '0.75'}], position: 5027, duration: 770, easing: "easeInOutElastic" },
                { id: "eid10", tween: [ "style", "${_LOGO}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,146.39990234375]}], position: 0, duration: 1000, easing: "easeInOutElastic" },
                { id: "eid12", tween: [ "style", "${_LOGO}", "clip", [0,142,139,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,142,83.800048828125,0]}], position: 0, duration: 1000, easing: "easeInOutElastic" },
                { id: "eid17", tween: [ "transform", "${_LOGO}", "scaleX", '1.5', { fromValue: '1'}], position: 500, duration: 394, easing: "easeInOutElastic" },
                { id: "eid106", tween: [ "transform", "${_LOGO}", "scaleX", '0.95424', { fromValue: '1.5'}], position: 1952, duration: 231, easing: "easeOutCubic" },
                { id: "eid109", tween: [ "transform", "${_LOGO}", "scaleX", '1', { fromValue: '0.95424'}], position: 2183, duration: 170, easing: "easeOutCubic" },
                { id: "eid49", tween: [ "style", "${_Untitled-3}", "opacity", '1', { fromValue: '0'}], position: 2183, duration: 731, easing: "easeInOutElastic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4750320");
