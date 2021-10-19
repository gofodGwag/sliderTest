(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("Ah5gKIDzAAIAAAVIjzAAg");
	this.shape.setTransform(15.4,-1.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AArFSIAAgtIhWAAIAAAtIhrAAIAAhQIEtAAIAABQgAh1k7IAAgWIDyAAIAAAWg");
	this.shape_1.setTransform(15.075,31.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("AB5EgIAAo/AA7EgIAAo/AAdEgIAAo/Ah4EgIAAo/AhaEgIAAo/Ag8EgIAAo/AgeEgIAAo/AAAEgIAAo/ABZEgIAAo/");
	this.shape_2.setTransform(15.375,28.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,0,0,4).p("AiWAAIEtAAAiWg1IEtAAAiWA0IEtAAAiWBpIEtAAAiWkJIEtAAAiWjUIEtAAAiWhqIEtAAAiWifIEtAAAiWCeIEtAAAiWDTIEtAAAiWEKIEtAA");
	this.shape_3.setTransform(15.075,30.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,0,0,4).p("AiWlGIEtAAIAAKNIktAAg");
	this.shape_4.setTransform(15.075,32.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#ABABD9","#D7D7EC","#A3A3CE"],[0,0.525,1],-25.8,-28.7,14.8,9.5).s().p("AiWFHIAAqNIEtAAIAAKNg");
	this.shape_5.setTransform(15.075,32.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-3.2,32.2,69.60000000000001);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape.setTransform(11.175,11.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,22.4,22.4), null);


(lib.StartBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.txt = new cjs.Text("start/stop", "8px 'Exo 2'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 12;
	this.txt.lineWidth = 131;
	this.txt.parent = this;
	this.txt.setTransform(0,-4.65);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(4));

	// skins
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.1,2,1).p("AAAiUQAVAAAOAOQAPAPAAAVIAADFQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVIAAjFQAAgVAOgPQAPgOAUAAg");
	this.shape.setTransform(-0.0084,-0.0395,2.396,2.396,89.9949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AgjCGQgOgOAAgVIAAjFQAAgUAOgQQAQgOATAAQAUAAAPAOQAPAQAAAUIAADFQAAAVgPAOQgPAPgUAAQgTAAgQgPg");
	this.shape_1.setTransform(-0.0084,-0.0395,2.396,2.396,89.9949);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-13,135.1,26);


(lib.SliderButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.1,2,1).p("AAAiUQAVAAAOAOQAPAPAAAVIAADFQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVIAAjFQAAgVAOgPQAPgOAUAAg");
	this.shape.setTransform(-0.1,-39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AgjCGQgOgOAAgVIAAjFQAAgUAOgQQAQgOATAAQAUAAAPAOQAPAQAAAUIAADFQAAAVgPAOQgPAPgUAAQgTAAgQgPg");
	this.shape_1.setTransform(-0.1,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-55.4,12,31.799999999999997);


(lib.SliderBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Regions
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003E74").ss(0.1,2,1).p("Egn3gAuMBPvAAAIAABdMhPvAAAg");
	this.shape.setTransform(255.225,4.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4EFFC").s().p("Egn3AAuIAAhcMBPvAAAIAABcg");
	this.shape_1.setTransform(255.225,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderBar, new cjs.Rectangle(-1,-1,512.5,11.3), null);


(lib.slow2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(23.75,72.05,1,0.9997,0,0,0,13.7,63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.1,regY:31.5,skewX:0.069,x:25.15,y:39.65},0).wait(1).to({skewX:0.1379,x:25.2},0).wait(1).to({skewX:0.2069,x:25.25},0).wait(1).to({skewX:0.2759,x:25.3},0).wait(1).to({skewX:0.3448},0).wait(1).to({skewX:0.4138,x:25.35},0).wait(1).to({skewX:0.4828,x:25.4},0).wait(1).to({skewX:0.5517,x:25.45},0).wait(1).to({skewX:0.6207},0).wait(1).to({skewX:0.6897,x:25.5},0).wait(1).to({skewX:0.7586,x:25.55},0).wait(1).to({skewX:0.8276,x:25.6},0).wait(1).to({skewX:0.8966},0).wait(1).to({skewX:0.9655,x:25.65},0).wait(1).to({skewX:1.0345,x:25.75},0).wait(1).to({skewX:1.1034},0).wait(1).to({skewX:1.1724,x:25.8},0).wait(1).to({skewX:1.2414},0).wait(1).to({skewX:1.3103,x:25.9},0).wait(1).to({skewX:1.3793},0).wait(1).to({skewX:1.4483,x:25.95},0).wait(1).to({skewX:1.5172},0).wait(1).to({skewX:1.5862,x:26.05},0).wait(1).to({skewX:1.6552},0).wait(1).to({skewX:1.7241,x:26.1},0).wait(1).to({skewX:1.7931,y:39.6},0).wait(1).to({skewX:1.8621,x:26.2},0).wait(1).to({skewX:1.931,x:26.25},0).wait(1).to({skewX:2},0).wait(1).to({skewX:1.9333},0).wait(1).to({skewX:1.8667,x:26.15},0).wait(1).to({skewX:1.8},0).wait(1).to({skewX:1.7333,x:26.1,y:39.65},0).wait(1).to({skewX:1.6667},0).wait(1).to({skewX:1.6,x:26},0).wait(1).to({skewX:1.5333},0).wait(1).to({skewX:1.4667,x:25.95},0).wait(1).to({skewX:1.4},0).wait(1).to({skewX:1.3333,x:25.85},0).wait(1).to({skewX:1.2667},0).wait(1).to({skewX:1.2,x:25.8},0).wait(1).to({skewX:1.1333},0).wait(1).to({skewX:1.0667,x:25.7},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.9333,x:25.65},0).wait(1).to({skewX:0.8667,x:25.6},0).wait(1).to({skewX:0.8,x:25.55},0).wait(1).to({skewX:0.7333},0).wait(1).to({skewX:0.6667,x:25.5},0).wait(1).to({skewX:0.6,x:25.45},0).wait(1).to({skewX:0.5333,x:25.4},0).wait(1).to({skewX:0.4667},0).wait(1).to({skewX:0.4,x:25.35},0).wait(1).to({skewX:0.3333,x:25.3},0).wait(1).to({skewX:0.2667,x:25.25},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.1333,x:25.2},0).wait(1).to({skewX:0.0667,x:25.15},0).wait(1).to({skewX:0,x:25.1,y:39.6},0).wait(1).to({skewX:-0.0667,y:39.65},0).wait(1).to({skewX:-0.1333,x:25.05},0).wait(1).to({skewX:-0.2,x:25},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.3333,x:24.95},0).wait(1).to({skewX:-0.4,x:24.9},0).wait(1).to({skewX:-0.4667,x:24.85},0).wait(1).to({skewX:-0.5333},0).wait(1).to({skewX:-0.6,x:24.8},0).wait(1).to({skewX:-0.6667,x:24.75},0).wait(1).to({skewX:-0.7333,x:24.7},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.8667,x:24.65},0).wait(1).to({skewX:-0.9333,x:24.6},0).wait(1).to({skewX:-1,x:24.55},0).wait(1).to({skewX:-1.0667},0).wait(1).to({skewX:-1.1333,x:24.45},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.2667,x:24.4},0).wait(1).to({skewX:-1.3333},0).wait(1).to({skewX:-1.4,x:24.3},0).wait(1).to({skewX:-1.4667},0).wait(1).to({skewX:-1.5333,x:24.25},0).wait(1).to({skewX:-1.6},0).wait(1).to({skewX:-1.6667,x:24.15},0).wait(1).to({skewX:-1.7333},0).wait(1).to({skewX:-1.8,x:24.1,y:39.6},0).wait(1).to({skewX:-1.8667},0).wait(1).to({skewX:-1.9333,x:24},0).wait(1).to({skewX:-2},0).wait(1).to({skewX:-1.9333},0).wait(1).to({skewX:-1.8667,x:24.1},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.7333,x:24.15,y:39.65},0).wait(1).to({skewX:-1.6667},0).wait(1).to({skewX:-1.6,x:24.25},0).wait(1).to({skewX:-1.5333},0).wait(1).to({skewX:-1.4667,x:24.3},0).wait(1).to({skewX:-1.4},0).wait(1).to({skewX:-1.3333,x:24.4},0).wait(1).to({skewX:-1.2667},0).wait(1).to({skewX:-1.2,x:24.45},0).wait(1).to({skewX:-1.1333},0).wait(1).to({skewX:-1.0667,x:24.55},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.9333,x:24.6},0).wait(1).to({skewX:-0.8667,x:24.65},0).wait(1).to({skewX:-0.8,x:24.7},0).wait(1).to({skewX:-0.7333},0).wait(1).to({skewX:-0.6667,x:24.75},0).wait(1).to({skewX:-0.6,x:24.8},0).wait(1).to({skewX:-0.5333,x:24.85},0).wait(1).to({skewX:-0.4667},0).wait(1).to({skewX:-0.4,x:24.9},0).wait(1).to({skewX:-0.3333,x:24.95},0).wait(1).to({skewX:-0.2667,x:25},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1333,x:25.05},0).wait(1).to({skewX:-0.0667,x:25.1},0).wait(1).to({skewX:0,y:39.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,4.9,36.7,69.6);


(lib.slow1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(23.75,72.05,1,0.9997,0,0,0,11.6,61.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.1,regY:31.5,rotation:0.0294,x:27.25,y:41.7},0).wait(1).to({rotation:0,skewX:0.0588,y:41.75},0).wait(1).to({skewX:0.0882},0).wait(1).to({skewX:0.1176,x:27.3},0).wait(1).to({skewX:0.1471},0).wait(1).to({skewX:0.1765},0).wait(1).to({skewX:0.2059,x:27.35},0).wait(1).to({skewX:0.2353},0).wait(1).to({skewX:0.2647},0).wait(1).to({skewX:0.2941,x:27.4},0).wait(1).to({skewX:0.3235,x:27.35},0).wait(1).to({skewX:0.3529,x:27.4},0).wait(1).to({skewX:0.3824,x:27.45},0).wait(1).to({skewX:0.4118,x:27.4},0).wait(1).to({skewX:0.4412,x:27.45},0).wait(1).to({skewX:0.4706,x:27.5},0).wait(1).to({skewX:0.5},0).wait(1).to({skewX:0.5294},0).wait(1).to({skewX:0.5588,x:27.55},0).wait(1).to({skewX:0.5882},0).wait(1).to({skewX:0.6176},0).wait(1).to({skewX:0.6471},0).wait(1).to({skewX:0.6765,x:27.6},0).wait(1).to({skewX:0.7059},0).wait(1).to({skewX:0.7353},0).wait(1).to({skewX:0.7647,x:27.65},0).wait(1).to({skewX:0.7941},0).wait(1).to({skewX:0.8235},0).wait(1).to({skewX:0.8529,x:27.7},0).wait(1).to({skewX:0.8824},0).wait(1).to({skewX:0.9118},0).wait(1).to({skewX:0.9412,x:27.75},0).wait(1).to({skewX:0.9706,x:27.7},0).wait(1).to({skewX:1,x:27.75},0).wait(1).to({skewX:0.9714,x:27.7},0).wait(1).to({skewX:0.9429,x:27.75},0).wait(1).to({skewX:0.9143,x:27.7},0).wait(1).to({skewX:0.8857},0).wait(1).to({skewX:0.8571},0).wait(1).to({skewX:0.8286,x:27.65},0).wait(1).to({skewX:0.8},0).wait(1).to({skewX:0.7714},0).wait(1).to({skewX:0.7429},0).wait(1).to({skewX:0.7143,x:27.6},0).wait(1).to({skewX:0.6857,x:27.55},0).wait(1).to({skewX:0.6571,x:27.6},0).wait(1).to({skewX:0.6286,x:27.55},0).wait(1).to({skewX:0.6,x:27.5},0).wait(1).to({skewX:0.5714,x:27.55},0).wait(1).to({skewX:0.5429,x:27.5},0).wait(1).to({skewX:0.5143},0).wait(1).to({skewX:0.4857},0).wait(1).to({skewX:0.4571,x:27.45},0).wait(1).to({skewX:0.4286},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3714},0).wait(1).to({skewX:0.3429,x:27.4},0).wait(1).to({skewX:0.3143},0).wait(1).to({skewX:0.2857},0).wait(1).to({skewX:0.2571,x:27.35},0).wait(1).to({skewX:0.2286,x:27.3},0).wait(1).to({skewX:0.2,x:27.35},0).wait(1).to({skewX:0.1714,x:27.3},0).wait(1).to({skewX:0.1429},0).wait(1).to({skewX:0.1143},0).wait(1).to({skewX:0.0857,x:27.25},0).wait(1).to({skewX:0.0571},0).wait(1).to({rotation:0.0286,skewX:0,y:41.7},0).wait(1).to({rotation:0,x:27.2},0).wait(1).to({rotation:-0.0286},0).wait(1).to({rotation:0,skewX:-0.0571,y:41.75},0).wait(1).to({skewX:-0.0857},0).wait(1).to({skewX:-0.1143,x:27.15},0).wait(1).to({skewX:-0.1429},0).wait(1).to({skewX:-0.1714},0).wait(1).to({skewX:-0.2,x:27.1},0).wait(1).to({skewX:-0.2286,x:27.15},0).wait(1).to({skewX:-0.2571,x:27.1},0).wait(1).to({skewX:-0.2857,x:27.05},0).wait(1).to({skewX:-0.3143},0).wait(1).to({skewX:-0.3429},0).wait(1).to({skewX:-0.3714,x:27},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.4286},0).wait(1).to({skewX:-0.4571},0).wait(1).to({skewX:-0.4857,x:26.95},0).wait(1).to({skewX:-0.5143},0).wait(1).to({skewX:-0.5429},0).wait(1).to({skewX:-0.5714,x:26.9},0).wait(1).to({skewX:-0.6,x:26.95},0).wait(1).to({skewX:-0.6286,x:26.9},0).wait(1).to({skewX:-0.6571,x:26.85},0).wait(1).to({skewX:-0.6857,x:26.9},0).wait(1).to({skewX:-0.7143,x:26.85},0).wait(1).to({skewX:-0.7429,x:26.8},0).wait(1).to({skewX:-0.7714},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.8286},0).wait(1).to({skewX:-0.8571,x:26.75},0).wait(1).to({skewX:-0.8857},0).wait(1).to({skewX:-0.9143},0).wait(1).to({skewX:-0.9429,x:26.7},0).wait(1).to({skewX:-0.9714,x:26.75},0).wait(1).to({skewX:-1,x:26.7},0).wait(1).to({skewX:-0.9714,x:26.75},0).wait(1).to({skewX:-0.9429,x:26.7},0).wait(1).to({skewX:-0.9143,x:26.75},0).wait(1).to({skewX:-0.8857},0).wait(1).to({skewX:-0.8571},0).wait(1).to({skewX:-0.8286,x:26.8},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.7714},0).wait(1).to({skewX:-0.7429},0).wait(1).to({skewX:-0.7143,x:26.85},0).wait(1).to({skewX:-0.6857,x:26.9},0).wait(1).to({skewX:-0.6571,x:26.85},0).wait(1).to({skewX:-0.6286,x:26.9},0).wait(1).to({skewX:-0.6,x:26.95},0).wait(1).to({skewX:-0.5714,x:26.9},0).wait(1).to({skewX:-0.5429,x:26.95},0).wait(1).to({skewX:-0.5143},0).wait(1).to({skewX:-0.4857},0).wait(1).to({skewX:-0.4571,x:27},0).wait(1).to({skewX:-0.4286},0).wait(1).to({skewX:-0.4},0).wait(1).to({skewX:-0.3714},0).wait(1).to({skewX:-0.3429,x:27.05},0).wait(1).to({skewX:-0.3143},0).wait(1).to({skewX:-0.2857},0).wait(1).to({skewX:-0.2571,x:27.1},0).wait(1).to({skewX:-0.2286,x:27.15},0).wait(1).to({skewX:-0.2,x:27.1},0).wait(1).to({skewX:-0.1714,x:27.15},0).wait(1).to({skewX:-0.1429},0).wait(1).to({skewX:-0.1143},0).wait(1).to({skewX:-0.0857,x:27.2},0).wait(1).to({skewX:-0.0571},0).wait(1).to({rotation:-0.0286,skewX:0,y:41.7},0).wait(1).to({rotation:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.1,7,34.4,69.7);


(lib.medium2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(23.75,72.05,1,0.9997,0,0,0,14.4,64.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.1,regY:31.5,skewX:0.2105,x:24.55,y:38.95},0).wait(1).to({skewX:0.4211,x:24.65},0).wait(1).to({skewX:0.6316,x:24.8},0).wait(1).to({skewX:0.8421,x:24.9},0).wait(1).to({skewX:1.0526,x:25},0).wait(1).to({skewX:1.2632,x:25.15},0).wait(1).to({skewX:1.4737,x:25.3},0).wait(1).to({skewX:1.6842,x:25.35},0).wait(1).to({skewX:1.8947,x:25.5,y:38.9},0).wait(1).to({skewX:2.1053,x:25.65},0).wait(1).to({skewX:2.3158,x:25.8,y:38.95},0).wait(1).to({skewX:2.5263,x:25.85},0).wait(1).to({skewX:2.7368,x:26},0).wait(1).to({skewX:2.9474,x:26.15},0).wait(1).to({skewX:3.1579,x:26.25},0).wait(1).to({skewX:3.3684,x:26.35,y:39},0).wait(1).to({skewX:3.5789,x:26.5},0).wait(1).to({skewX:3.7895,x:26.6,y:38.95},0).wait(1).to({skewX:4,x:26.75,y:39},0).wait(1).to({skewX:3.8,x:26.6,y:38.95},0).wait(1).to({skewX:3.6,x:26.5,y:39},0).wait(1).to({skewX:3.4,x:26.4},0).wait(1).to({skewX:3.2,x:26.3},0).wait(1).to({skewX:3,x:26.15,y:38.95},0).wait(1).to({skewX:2.8,x:26.05},0).wait(1).to({skewX:2.6,x:25.9},0).wait(1).to({skewX:2.4,x:25.85},0).wait(1).to({skewX:2.2,x:25.7,y:38.9},0).wait(1).to({skewX:2,x:25.6},0).wait(1).to({skewX:1.8,x:25.45},0).wait(1).to({skewX:1.6,x:25.35,y:38.95},0).wait(1).to({skewX:1.4,x:25.25},0).wait(1).to({skewX:1.2,x:25.15},0).wait(1).to({skewX:1,x:25},0).wait(1).to({skewX:0.8,x:24.9},0).wait(1).to({skewX:0.6,x:24.75},0).wait(1).to({skewX:0.4,x:24.7},0).wait(1).to({skewX:0.2,x:24.55},0).wait(1).to({skewX:0,x:24.4,y:38.9},0).wait(1).to({skewX:-0.2,x:24.3,y:38.95},0).wait(1).to({skewX:-0.4,x:24.15},0).wait(1).to({skewX:-0.6,x:24.1},0).wait(1).to({skewX:-0.8,x:23.95},0).wait(1).to({skewX:-1,x:23.85},0).wait(1).to({skewX:-1.2,x:23.7},0).wait(1).to({skewX:-1.4,x:23.6},0).wait(1).to({skewX:-1.6,x:23.5},0).wait(1).to({skewX:-1.8,x:23.4,y:38.9},0).wait(1).to({skewX:-2,x:23.25},0).wait(1).to({skewX:-2.2,x:23.15},0).wait(1).to({skewX:-2.4,x:23,y:38.95},0).wait(1).to({skewX:-2.6,x:22.95},0).wait(1).to({skewX:-2.8,x:22.8},0).wait(1).to({skewX:-3,x:22.7},0).wait(1).to({skewX:-3.2,x:22.55,y:39},0).wait(1).to({skewX:-3.4,x:22.45},0).wait(1).to({skewX:-3.6,x:22.35},0).wait(1).to({skewX:-3.8,x:22.25,y:38.95},0).wait(1).to({skewX:-4,x:22.1,y:39},0).wait(1).to({skewX:-3.8,x:22.25,y:38.95},0).wait(1).to({skewX:-3.6,x:22.35,y:39},0).wait(1).to({skewX:-3.4,x:22.45},0).wait(1).to({skewX:-3.2,x:22.55},0).wait(1).to({skewX:-3,x:22.7,y:38.95},0).wait(1).to({skewX:-2.8,x:22.8},0).wait(1).to({skewX:-2.6,x:22.95},0).wait(1).to({skewX:-2.4,x:23},0).wait(1).to({skewX:-2.2,x:23.15,y:38.9},0).wait(1).to({skewX:-2,x:23.25},0).wait(1).to({skewX:-1.8,x:23.4},0).wait(1).to({skewX:-1.6,x:23.5,y:38.95},0).wait(1).to({skewX:-1.4,x:23.6},0).wait(1).to({skewX:-1.2,x:23.7},0).wait(1).to({skewX:-1,x:23.85},0).wait(1).to({skewX:-0.8,x:23.95},0).wait(1).to({skewX:-0.6,x:24.1},0).wait(1).to({skewX:-0.4,x:24.15},0).wait(1).to({skewX:-0.2,x:24.3},0).wait(1).to({skewX:0,x:24.4,y:38.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,4.2,41.2,69.7);


(lib.medium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(23.7,72.1,1,0.9997,0,0,0,14.2,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.1,regY:31.5,skewX:0.125,x:24.65,y:39.1},0).wait(1).to({skewX:0.25,x:24.7},0).wait(1).to({skewX:0.375,x:24.8},0).wait(1).to({skewX:0.5,x:24.9},0).wait(1).to({skewX:0.625,x:24.95},0).wait(1).to({skewX:0.75,x:25},0).wait(1).to({skewX:0.875,x:25.05},0).wait(1).to({skewX:1,x:25.15},0).wait(1).to({skewX:1.125,x:25.25},0).wait(1).to({skewX:1.25,x:25.3},0).wait(1).to({skewX:1.375,x:25.35},0).wait(1).to({skewX:1.5,x:25.45},0).wait(1).to({skewX:1.625,x:25.5},0).wait(1).to({skewX:1.75,x:25.6},0).wait(1).to({skewX:1.875,x:25.65,y:39.05},0).wait(1).to({skewX:2,x:25.7},0).wait(1).to({skewX:2.125,x:25.8},0).wait(1).to({skewX:2.25,x:25.85},0).wait(1).to({skewX:2.375,x:25.95,y:39.1},0).wait(1).to({skewX:2.5,x:26.05},0).wait(1).to({skewX:2.625,x:26.1},0).wait(1).to({skewX:2.75,x:26.15},0).wait(1).to({skewX:2.875,x:26.2},0).wait(1).to({skewX:3,x:26.3},0).wait(1).to({skewX:2.88,x:26.2},0).wait(1).to({skewX:2.76},0).wait(1).to({skewX:2.64,x:26.1},0).wait(1).to({skewX:2.52,x:26},0).wait(1).to({skewX:2.4,x:25.95},0).wait(1).to({skewX:2.28,x:25.9},0).wait(1).to({skewX:2.16,x:25.8,y:39.05},0).wait(1).to({skewX:2.04,x:25.75},0).wait(1).to({skewX:1.92,x:25.7},0).wait(1).to({skewX:1.8,x:25.6},0).wait(1).to({skewX:1.68,x:25.55,y:39.1},0).wait(1).to({skewX:1.56,x:25.5},0).wait(1).to({skewX:1.44,x:25.4},0).wait(1).to({skewX:1.32,x:25.3},0).wait(1).to({skewX:1.2,x:25.25},0).wait(1).to({skewX:1.08,x:25.2},0).wait(1).to({skewX:0.96,x:25.1},0).wait(1).to({skewX:0.84,x:25.05},0).wait(1).to({skewX:0.72,x:25},0).wait(1).to({skewX:0.6,x:24.9},0).wait(1).to({skewX:0.48,x:24.85},0).wait(1).to({skewX:0.36,x:24.8},0).wait(1).to({skewX:0.24,x:24.7},0).wait(1).to({skewX:0.12,x:24.65},0).wait(1).to({skewX:0,x:24.55,y:39.05},0).wait(1).to({skewX:-0.12,x:24.5,y:39.1},0).wait(1).to({skewX:-0.24,x:24.45},0).wait(1).to({skewX:-0.36,x:24.35},0).wait(1).to({skewX:-0.48,x:24.3},0).wait(1).to({skewX:-0.6,x:24.25},0).wait(1).to({skewX:-0.72,x:24.15},0).wait(1).to({skewX:-0.84,x:24.1},0).wait(1).to({skewX:-0.96,x:24.05},0).wait(1).to({skewX:-1.08,x:23.95},0).wait(1).to({skewX:-1.2,x:23.9},0).wait(1).to({skewX:-1.32,x:23.85},0).wait(1).to({skewX:-1.44,x:23.75},0).wait(1).to({skewX:-1.56,x:23.65},0).wait(1).to({skewX:-1.68,x:23.6},0).wait(1).to({skewX:-1.8,x:23.55,y:39.05},0).wait(1).to({skewX:-1.92,x:23.45},0).wait(1).to({skewX:-2.04,x:23.4},0).wait(1).to({skewX:-2.16,x:23.35},0).wait(1).to({skewX:-2.28,x:23.25,y:39.1},0).wait(1).to({skewX:-2.4,x:23.2},0).wait(1).to({skewX:-2.52,x:23.15},0).wait(1).to({skewX:-2.64,x:23.05},0).wait(1).to({skewX:-2.76,x:22.95},0).wait(1).to({skewX:-2.88},0).wait(1).to({skewX:-3,x:22.85},0).wait(1).to({skewX:-2.88,x:22.95},0).wait(1).to({skewX:-2.76},0).wait(1).to({skewX:-2.64,x:23.05},0).wait(1).to({skewX:-2.52,x:23.15},0).wait(1).to({skewX:-2.4,x:23.2},0).wait(1).to({skewX:-2.28,x:23.25},0).wait(1).to({skewX:-2.16,x:23.35,y:39.05},0).wait(1).to({skewX:-2.04,x:23.4},0).wait(1).to({skewX:-1.92,x:23.45},0).wait(1).to({skewX:-1.8,x:23.55},0).wait(1).to({skewX:-1.68,x:23.6,y:39.1},0).wait(1).to({skewX:-1.56,x:23.65},0).wait(1).to({skewX:-1.44,x:23.75},0).wait(1).to({skewX:-1.32,x:23.85},0).wait(1).to({skewX:-1.2,x:23.9},0).wait(1).to({skewX:-1.08,x:23.95},0).wait(1).to({skewX:-0.96,x:24.05},0).wait(1).to({skewX:-0.84,x:24.1},0).wait(1).to({skewX:-0.72,x:24.15},0).wait(1).to({skewX:-0.6,x:24.25},0).wait(1).to({skewX:-0.48,x:24.3},0).wait(1).to({skewX:-0.36,x:24.35},0).wait(1).to({skewX:-0.24,x:24.45},0).wait(1).to({skewX:-0.12,x:24.5},0).wait(1).to({skewX:0,x:24.55,y:39.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,4.3,39,69.7);


(lib.fast2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(23.75,72.05,1,0.9997,0,0,0,14.1,64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.1,regY:31.5,skewX:0.6667,x:25.1,y:39.25},0).wait(1).to({skewX:1.3333,x:25.45},0).wait(1).to({skewX:2,x:25.85,y:39.2},0).wait(1).to({skewX:2.6667,x:26.25,y:39.25},0).wait(1).to({skewX:3.3333,x:26.6,y:39.3},0).wait(1).to({skewX:4,x:27},0).wait(1).to({skewX:4.6667,x:27.4,y:39.35},0).wait(1).to({skewX:5.3333,x:27.75},0).wait(1).to({skewX:6,x:28.15,y:39.4},0).wait(1).to({skewX:5.4,x:27.8,y:39.35},0).wait(1).to({skewX:4.8,x:27.45},0).wait(1).to({skewX:4.2,x:27.15,y:39.3},0).wait(1).to({skewX:3.6,x:26.75},0).wait(1).to({skewX:3,x:26.45,y:39.25},0).wait(1).to({skewX:2.4,x:26.1},0).wait(1).to({skewX:1.8,x:25.75,y:39.2},0).wait(1).to({skewX:1.2,x:25.4,y:39.25},0).wait(1).to({skewX:0.6,x:25.05},0).wait(1).to({skewX:0,x:24.7,y:39.2},0).wait(1).to({skewX:-0.6,x:24.4,y:39.25},0).wait(1).to({skewX:-1.2,x:24.05},0).wait(1).to({skewX:-1.8,x:23.7,y:39.2},0).wait(1).to({skewX:-2.4,x:23.35,y:39.25},0).wait(1).to({skewX:-3,x:23},0).wait(1).to({skewX:-3.6,x:22.7,y:39.3},0).wait(1).to({skewX:-4.2,x:22.3},0).wait(1).to({skewX:-4.8,x:22,y:39.35},0).wait(1).to({skewX:-5.4,x:21.65},0).wait(1).to({skewX:-6,x:21.3,y:39.4},0).wait(1).to({skewX:-5.4,x:21.65,y:39.35},0).wait(1).to({skewX:-4.8,x:22},0).wait(1).to({skewX:-4.2,x:22.3,y:39.3},0).wait(1).to({skewX:-3.6,x:22.7},0).wait(1).to({skewX:-3,x:23,y:39.25},0).wait(1).to({skewX:-2.4,x:23.35},0).wait(1).to({skewX:-1.8,x:23.7,y:39.2},0).wait(1).to({skewX:-1.2,x:24.05,y:39.25},0).wait(1).to({skewX:-0.6,x:24.4},0).wait(1).to({skewX:0,x:24.7,y:39.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,4.5,45.6,69.7);


(lib.fast = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(23.8,72,1,0.9997,0,0,0,13.5,63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.1,regY:31.5,skewX:0.3571,x:25.55,y:39.9},0).wait(1).to({skewX:0.7143,x:25.75},0).wait(1).to({skewX:1.0714,x:25.95},0).wait(1).to({skewX:1.4286,x:26.15},0).wait(1).to({skewX:1.7857,x:26.35,y:39.85},0).wait(1).to({skewX:2.1429,x:26.55},0).wait(1).to({skewX:2.5,x:26.8,y:39.9},0).wait(1).to({skewX:2.8571,x:27},0).wait(1).to({skewX:3.2143,x:27.2,y:39.95},0).wait(1).to({skewX:3.5714,x:27.4},0).wait(1).to({skewX:3.9286,x:27.6,y:39.9},0).wait(1).to({skewX:4.2857,x:27.8,y:39.95},0).wait(1).to({skewX:4.6429,x:28,y:40},0).wait(1).to({skewX:5,x:28.15,y:39.95},0).wait(1).to({skewX:4.6667,x:28,y:40},0).wait(1).to({skewX:4.3333,x:27.8,y:39.95},0).wait(1).to({skewX:4,x:27.6},0).wait(1).to({skewX:3.6667,x:27.45},0).wait(1).to({skewX:3.3333,x:27.2},0).wait(1).to({skewX:3,x:27.05,y:39.9},0).wait(1).to({skewX:2.6667,x:26.9},0).wait(1).to({skewX:2.3333,x:26.65},0).wait(1).to({skewX:2,x:26.5,y:39.85},0).wait(1).to({skewX:1.6667,x:26.35,y:39.9},0).wait(1).to({skewX:1.3333,x:26.1},0).wait(1).to({skewX:1,x:25.95},0).wait(1).to({skewX:0.6667,x:25.75},0).wait(1).to({skewX:0.3333,x:25.55},0).wait(1).to({skewX:0,x:25.35,y:39.85},0).wait(1).to({skewX:-0.3333,x:25.2,y:39.9},0).wait(1).to({skewX:-0.6667,x:25},0).wait(1).to({skewX:-1,x:24.8},0).wait(1).to({skewX:-1.3333,x:24.65},0).wait(1).to({skewX:-1.6667,x:24.4},0).wait(1).to({skewX:-2,x:24.25,y:39.85},0).wait(1).to({skewX:-2.3333,x:24.1,y:39.9},0).wait(1).to({skewX:-2.6667,x:23.85},0).wait(1).to({skewX:-3,x:23.7},0).wait(1).to({skewX:-3.3333,x:23.55,y:39.95},0).wait(1).to({skewX:-3.6667,x:23.3},0).wait(1).to({skewX:-4,x:23.15},0).wait(1).to({skewX:-4.3333,x:22.95},0).wait(1).to({skewX:-4.6667,x:22.75,y:40},0).wait(1).to({skewX:-5,x:22.6,y:39.95},0).wait(1).to({skewX:-4.6667,x:22.75,y:40},0).wait(1).to({skewX:-4.3333,x:22.95,y:39.95},0).wait(1).to({skewX:-4,x:23.15},0).wait(1).to({skewX:-3.6667,x:23.3},0).wait(1).to({skewX:-3.3333,x:23.55},0).wait(1).to({skewX:-3,x:23.7,y:39.9},0).wait(1).to({skewX:-2.6667,x:23.85},0).wait(1).to({skewX:-2.3333,x:24.1},0).wait(1).to({skewX:-2,x:24.25,y:39.85},0).wait(1).to({skewX:-1.6667,x:24.4,y:39.9},0).wait(1).to({skewX:-1.3333,x:24.65},0).wait(1).to({skewX:-1,x:24.8},0).wait(1).to({skewX:-0.6667,x:25},0).wait(1).to({skewX:-0.3333,x:25.2},0).wait(1).to({skewX:0,x:25.35,y:39.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,5.1,43.2,69.7);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("A3XAAMAuvAAA");
	this.shape.setTransform(-202.525,266.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(268));

	// Layer_11
	this.tallb = new lib.Symbol6("synched",0);
	this.tallb.name = "tallb";
	this.tallb.setTransform(-215,258.9,3.9447,3.9435,0,0,0,13.8,64);

	this.tallb_1 = new lib.slow1();
	this.tallb_1.name = "tallb_1";
	this.tallb_1.setTransform(-245.6,136,3.9447,3.9447,0,0,0,18.2,43.1);

	this.tallb_2 = new lib.slow2();
	this.tallb_2.name = "tallb_2";
	this.tallb_2.setTransform(-237.1,144.65,3.9447,3.9447,0,0,0,18.2,43.1);

	this.tallb_3 = new lib.medium();
	this.tallb_3.name = "tallb_3";
	this.tallb_3.setTransform(-234.95,147.25,3.9447,3.9447,0,0,0,18.2,43.1);

	this.tallb_4 = new lib.medium2();
	this.tallb_4.name = "tallb_4";
	this.tallb_4.setTransform(-234.55,147.25,3.9447,3.9447,0,0,0,18.2,43.1);

	this.tallb_5 = new lib.fast();
	this.tallb_5.name = "tallb_5";
	this.tallb_5.setTransform(-238.1,144.15,3.9447,3.9447,0,0,0,18.2,43.1);

	this.instance = new lib.fast2();
	this.instance.setTransform(-235.7,146.35,3.9447,3.9447,0,0,0,18.2,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tallb}]}).to({state:[{t:this.tallb_1,p:{x:-245.6,y:136}}]},19).to({state:[{t:this.tallb_2,p:{x:-237.1,y:144.65}}]},20).to({state:[{t:this.tallb_3,p:{x:-234.95,y:147.25}}]},20).to({state:[{t:this.tallb_4,p:{x:-234.55,y:147.25}}]},20).to({state:[{t:this.tallb_5}]},20).to({state:[{t:this.instance}]},20).to({state:[{t:this.tallb_5}]},40).to({state:[{t:this.tallb_4,p:{x:-234.5,y:147}}]},21).to({state:[{t:this.tallb_3,p:{x:-234.9,y:147.2}}]},19).to({state:[{t:this.tallb_2,p:{x:-237,y:145.25}}]},20).to({state:[{t:this.tallb_1,p:{x:-245.55,y:136.7}}]},20).to({state:[{t:this.tallb}]},20).wait(9));

	// Layer_2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(2.25,264.2,1,1,0,0,0,11.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[2.3,264.2,2.8,264.2,3.4,264.3,4,264.3,4.6,264.3,5.2,264.3,5.8,264.3,37.5,263.3,66.5,229.6,81.4,212.2,89.7,194.9,89.8,194.7,89.9,194.5,98.3,177,113.4,159.5,135.2,134,158.7,127.3,160.2,126.9,161.8,126.5,167.9,125.1,174,124.9,174.7,124.9,175.3,124.9,175.8,124.9,176.4,124.9,208.1,125.8,237.1,159.5,252.1,177,260.5,194.5,263.6,200,266.6,205.5,274.6,218.7,284,229.6,312.8,263.3,344.6,264.2,345.2,264.3,345.9,264.3,346.5,264.3,347.1,264.2,348.8,264.2,350.5,264]}},267).wait(1));

	// Layer_3 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,0,0,4).p("A7NK5QAFAAAHABQAFAAAGAAQAGAAAGAAQE+gKEhlRQCViuBUitQABgCAAgCQBViuCWivQDbj/DqhEQAQgEAQgEQA8gOA+gCQAGAAAGAAQAHAAAEAAQE+AJEiFSQCWCvBUCuIA8BuQBQCEBeBtQEhFRE+AJQAFABAHAAQAGAAAGgBQASAAARgC");
	this.shape_1.setTransform(176.375,194.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(268));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#003E74").ss(2,1,1).p("Agig0IBFA1IhEA0");
	this.shape_2.setTransform(347.025,264.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(268));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.1,-4.5,714.9000000000001,279.9);


// stage content:
(lib.slide_example_edtech = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// Enable touch events while allowing the touch events to bubble up to the document.
		
		createjs.Touch.enable(stage, false, true);
		
		// Don't let the stage to automatically prevent default touch events.
		
		stage.preventSelection = false;
		
		this.graph1.stop()
		this.button.on("mousedown", function (e)
		
			{
		
				e.target.offsetX = (e.stageX / stage.scaleX) - e.target.x;
		
			}.bind(this));
		
		this.button.on("pressmove", function (e)
		
			{
		
				e.target.x = this.clamp((e.stageX / stage.scaleX) - e.target.offsetX, this.bar.x, this.bar.x + this.bar.nominalBounds.width);
		
				this.setProportion();
				this.controlTower1();
		
			}.bind(this));
		
		this.setProportion = function ()
		
		{
			var prop = (this.button.x - this.bar.x) / this.bar.nominalBounds.width;
			this.txt.x = this.button.x;
			this.txt.text = Math.round(prop * 100) + "%";
			this.graph1.gotoAndStop(Math.floor(this.graph1.timeline.duration * prop))
		}.bind(this);
		
		this.clamp = function (value, min, max)
		
		{
		
			if (value < min)
		
				return min;
		
			else if (value > max)
		
				return max;
		
			else
		
				return value;
		
		}
		
		setTimeout(this.setProportion, 0);
		
		
		
		//buttons
		this.tallBBtn.txt.text = "hide";
		this.tallBBtn.addEventListener("click", tallBBtnfunction.bind(this));
		
		
		//create function to start/stop animation and toggle button text
		function tallBBtnfunction() {
			if (this.tallBBtn.txt.text == "hide") {
				this.tallBBtn.txt.text = "show";
				this.graph1.visible = false;
			} else {
		
				this.tallBBtn.txt.text = "hide";
				this.graph1.visible = true;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// JS
	this.tallBBtn = new lib.StartBtn();
	this.tallBBtn.name = "tallBBtn";
	this.tallBBtn.setTransform(462.7,338.95);
	new cjs.ButtonHelper(this.tallBBtn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.graph1 = new lib.Symbol22();
	this.graph1.name = "graph1";
	this.graph1.setTransform(408.45,151.6,0.6979,0.6979,0,0,0,174.8,132.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAAAIQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQgCgCABgFQABgFADAAQACgBADADIABAGQAAABAAAAQgBABAAABQAAAAAAABQAAAAgBAAQAAABgBABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(67.1857,89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.graph1},{t:this.tallBBtn}]}).wait(1));

	// Bar
	this.txt = new cjs.Text("38%", "8px 'Helvetica'", "#666666");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.lineWidth = 38;
	this.txt.parent = this;
	this.txt.setTransform(16.8,276.05);

	this.button = new lib.SliderButton();
	this.button.name = "button";
	this.button.setTransform(19.9,342.15);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.SliderButton(), 3);

	this.bar = new lib.SliderBar();
	this.bar.name = "bar";
	this.bar.setTransform(19.8,298.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.button},{t:this.txt}]}).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AgNAYQAEgBADgDIAFgGIABgCIgCAAIgCgBIgBgBIgOgmIAHAAIALAdIABAFIABAAIABgFIALgdIAHAAIgQAqQgEAOgNABg");
	this.shape_1.setTransform(440.4,260.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E74").s().p("AgIAUQgEgCgCgFQgCgFAAgIQAAgHACgFQACgEAEgCQAFgCAGgBIAHABIAGABIgBAFIgLAAIgHABQgDACgBADQgBADAAAFQAAAGABAEQABACADACQADACAEgBIAMgBIABAGQgGACgIAAQgGAAgFgCg");
	this.shape_2.setTransform(436.275,259.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E74").s().p("AALAVIAAgcQAAgDgBgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgGABIgJAFIAAAdIgHAAIAAgoIAGAAIAAAGQAKgHAIAAQAFAAADADQADADAAAGIAAAdg");
	this.shape_3.setTransform(431.75,259.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E74").s().p("AgJAUQgEgDgCgEQgCgFAAgIQAAgHACgFQACgFAEgCQAEgCAGAAQAJABAEADQAEAEAAAGQAAAGgCACQgDADgFAAIgSAAQABAEABADQACACACABIAGABIAOgBIABAFIgHACIgJABQgGAAgEgCgAgFgNQgCABgBADQgCADAAAFIAQAAQAFAAAAgGQAAgEgCgBQgDgCgFAAIgGABg");
	this.shape_4.setTransform(427.075,259.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E74").s().p("AgOASQgCgDAAgFIAAgeIAHAAIAAAcQAAADABADQACABADAAIAFgBIAIgFIAAgdIAHAAIAAAoIgFAAIgBgGIgJAFIgHACQgGAAgDgDg");
	this.shape_5.setTransform(422.425,259.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E74").s().p("AAMAeIgBgPIABgIQgIAGgIABQgGAAgEgGQgEgEAAgLQABgHACgFQABgFAEgCQAEgCAGgBIAJABIAKACIAAA4gAgFgVQgDACgBADIgBAKQAAAGACAEQABAEAGgBQACABADgCIAIgEIAAgXIgLgBIgGABg");
	this.shape_6.setTransform(417.6,260);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E74").s().p("AgJAUQgEgDgCgEQgCgFAAgIQAAgHACgFQACgFAEgCQAEgCAGAAQAJABAEADQAEAEAAAGQAAAGgCACQgDADgFAAIgSAAQABAEABADQACACACABIAGABIAOgBIABAFIgHACIgJABQgGAAgEgCgAgFgNQgCABgBADQgCADAAAFIAQAAQAFAAAAgGQAAgEgCgBQgDgCgFAAIgGABg");
	this.shape_7.setTransform(413.125,259.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E74").s().p("AgMAVIAAgoIAGAAIABAGQAIgHAIAAIACAAIgBAHIgCAAIgHABIgIAEIAAAdg");
	this.shape_8.setTransform(409.425,259.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E74").s().p("AgHAeIAAgiIgHAAIAAgFIAHgBIAAgHQAAgGADgDQADgDAFAAIALABIAAAFIgJAAQgEAAgBABQgBACAAADIAAAHIAMAAIAAAGIgMAAIAAAig");
	this.shape_9.setTransform(406.125,258.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E74").s().p("AgMAcQgEgBgCgDQgCgDAAgEQAAgDACgDIAFgEIgCgCIgBgEIABgDIACgCQgDgCgBgDQgBgDAAgDQAAgFACgDQABgCAEgCQAEgBAGgBIAJABIANAAIgBAFIgGAAQACADAAAFQAAAGgEAEQgEACgJAAIgIAAIgBADIABACIADABIAOACQAGABACADQACACAAAGQAAAEgCADQgBADgFABQgEACgGAAQgIAAgEgCgAgMAMIgBAEIABAFQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIAIABIAHgBIADgCIABgFIAAgDIgCgBIgFgBIgNgDIgDAEgAgJgVQgDACAAAEQAAAEADABQACACAGAAQAFAAADgCQACgBAAgEQAAgEgCgCQgDgCgFAAQgGAAgCACg");
	this.shape_10.setTransform(400.275,260);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E74").s().p("AALAVIAAgcQAAgDgCgCQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgGABIgJAFIAAAdIgHAAIAAgoIAGAAIAAAGQALgHAHAAQAFAAADADQADADAAAGIAAAdg");
	this.shape_11.setTransform(395.45,259.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E74").s().p("AgCAdIAAgoIAGAAIAAAogAgBgTQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgFIABgBIABgBIADAAQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAIAAAFQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_12.setTransform(391.975,258.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E74").s().p("AgIAUQgEgCgCgFQgCgFAAgIQAAgHACgFQACgEAEgCQAFgCAGgBIAHABIAGABIgBAFIgLAAIgHABQgDACgBADQgBADAAAFQAAAGABAEQABACADACQADACAEgBIAMgBIABAGQgGACgIAAQgGAAgFgCg");
	this.shape_13.setTransform(388.975,259.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E74").s().p("AgMAVIAAgoIAGAAIABAGQAIgHAIAAIACAAIgBAHIgCAAIgHABIgIAEIAAAdg");
	this.shape_14.setTransform(385.425,259.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003E74").s().p("AgKAUQgEgCgCgFQgCgFAAgIQAAgHACgFQACgEAEgCQAEgCAGgBQAHABAEACQAEACACAEQACAFAAAHQAAAIgCAFQgCAFgEACQgEACgHAAQgGAAgEgCgAgGgNQgDACgBADIgBAIIABAKQABADADABQADACADgBQAFABACgCQADgBABgDIABgKIgBgIQgBgDgDgCIgHgBIgGABg");
	this.shape_15.setTransform(381.125,259.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E74").s().p("AgRAdIAAgvQAAgEADgDQAEgDAEAAIAXABIAAAGIgUAAIgFABQAAAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAAOIAXAAIAAAEIgXAAIAAAbg");
	this.shape_16.setTransform(376.7,258.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003E74").s().p("AgMAQQgEgCgDgEQgCgEAAgGQABgJADgEQAEgEAGAAQAFAAADACQACADAAAFIAAASQAFgBADgBQADgCAAgCIABgGIgBgOIAFgBIACAHIAAAJQAAAGgBAEQgDAEgFACQgEACgIAAQgHAAgFgCgAgNgIQgBADAAAFIABAGQABACADABQADACAFAAIAAgQQAAgFgGAAQgEAAgCACg");
	this.shape_17.setTransform(275.05,134.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003E74").s().p("AgQAQQgDgCgBgDIgBgJIABgIIABgJIAFABIAAAEIAAAFIAAAHIAAAFIABACIAEABIADgBIACgBIABgEIACgLQABgFACgCQACgCAGAAQAFAAACACQACABACAEIAAAJIAAAQIgGAAIAAgMIAAgCIAAgHIgCgDIgDgBQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgCAFIgCALQgCAFgCACQgCACgFAAQgEAAgDgBg");
	this.shape_18.setTransform(275.05,138.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003E74").s().p("AgTASIAAgGIAHgBQgIgKAAgHQAAgGADgCQADgDAFAAIAeAAIAAAHIgcAAQgEAAgBACQAAAAgBAAQAAABAAAAQAAABAAABQgBAAAAABIACAGIAEAJIAdAAIAAAHg");
	this.shape_19.setTransform(275,143.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003E74").s().p("AgMARQgEgCgCgEQgCgEgBgHQABgGACgEQACgEAEgCQAGgCAGAAQAIAAAFACQAFACACAEQABAEAAAGQAAAHgBAEQgCAEgFACQgFACgIAAQgGAAgGgCgAgIgKQgDABgCADIgBAGIABAHQACADADABIAIABIAKgBQADgBABgDQABgDAAgEQAAgEgBgCQgBgDgDgBIgKgBIgIABg");
	this.shape_20.setTransform(275.05,148.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003E74").s().p("AgcATIAAgGIAHgBQgDgDgDgFQgCgEAAgEQABgHAFgDQAGgEALAAQAGAAAFACQAFACACADQABADAAAGQAAAHgDAHIAHAAIANAAIAAAHgAgQgJQgDAAgCACQgBACAAAEIABAFIAFAIIAVAAIABgEIABgFIAAgDQAAgEgBgCQgBgCgDgBIgIgBIgKABg");
	this.shape_21.setTransform(275.85,153.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003E74").s().p("AgQAQQgDgCgBgDIgBgJIABgIIABgJIAFABIAAAEIAAAFIAAAHIAAAFIABACIAEABIADgBIACgBIABgEIACgLQABgFACgCQACgCAGAAQAFAAACACQACABACAEIAAAJIAAAQIgGAAIAAgMIAAgCIAAgHIgCgDIgDgBQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgCAFIgCALQgCAFgCACQgCACgFAAQgEAAgDgBg");
	this.shape_22.setTransform(275.05,157.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003E74").s().p("AgMAQQgEgCgDgEQgCgEAAgGQABgJADgEQAEgEAGAAQAFAAADACQACADAAAFIAAASQAFgBADgBQADgCAAgCIABgGIgBgOIAFgBIACAHIAAAJQAAAGgBAEQgDAEgFACQgEACgIAAQgHAAgFgCgAgNgIQgBADAAAFIABAGQABACADABQADACAFAAIAAgQQAAgFgGAAQgEAAgCACg");
	this.shape_23.setTransform(275.05,161.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003E74").s().p("AgcAUIAAgIIAAgLQAAgGABgEQACgEADgCQAEgCAGAAQAHAAAEACQADADAAAFIABAAIACgEIAGgDIASgFIAAAIIgSAFQgDABgBACQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIAAANIAYAAIAAAHgAgSgJQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABIgBAGIAAAMIAWAAIAAgMIgBgGQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBgBIgGgBIgHABg");
	this.shape_24.setTransform(274.175,166.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#003E74").ss(2,1,1).p("ATZOHIABABIgwAkAS7OHIABAAQACAAACAAIAAAAIAFAAIANgBASpNjIAuAjAy0urIAlAxAzZt5IAlgyAykOHIgQAAIAA8yAS3OHMglDAAA");
	this.shape_25.setTransform(406.9,153.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,0,0,4).p("ASkABQABAAABgBQABAAACAAQABAAACAAQAEAAAGAAQACAAADAAIACABASgABIgFAAAzAABIAIAAQAEAAAEAAQAEAAAFAA");
	this.shape_26.setTransform(409.6951,243.6636);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,256.3,243.3,95.59999999999997);
// library properties:
lib.properties = {
	id: '4B93EBDA609CD5499832C33DCA53321E',
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4B93EBDA609CD5499832C33DCA53321E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;