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
	this.shape_1.graphics.f("#666666").s().p("AgjCGQgOgOAAgVIAAjFQAAgUAOgQQAQgOATAAQAUAAAPAOQAPAQAAAUIAADFQAAAVgPAOQgPAPgUAAQgTAAgQgPg");
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
	this.shape.graphics.f("#999999").s().p("Egn3AAuIAAhcMBPvAAAIAABcg");
	this.shape.setTransform(255.225,4.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderBar, new cjs.Rectangle(0,0,510.5,9.3), null);


(lib.slow = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(23.8,72.1,1,0.9997,0,0,0,13.8,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.1,regY:31.5,skewX:0.069,x:25.1,y:39.6},0).wait(1).to({skewX:0.1379,x:25.15},0).wait(1).to({skewX:0.2069,x:25.2},0).wait(1).to({skewX:0.2759,x:25.25},0).wait(1).to({skewX:0.3448},0).wait(1).to({skewX:0.4138,x:25.3},0).wait(1).to({skewX:0.4828,x:25.35},0).wait(1).to({skewX:0.5517,x:25.4},0).wait(1).to({skewX:0.6207},0).wait(1).to({skewX:0.6897,x:25.45},0).wait(1).to({skewX:0.7586,x:25.5},0).wait(1).to({skewX:0.8276,x:25.55},0).wait(1).to({skewX:0.8966,x:25.6},0).wait(1).to({skewX:0.9655},0).wait(1).to({skewX:1.0345,x:25.7},0).wait(1).to({skewX:1.1034},0).wait(1).to({skewX:1.1724,x:25.75},0).wait(1).to({skewX:1.2414},0).wait(1).to({skewX:1.3103,x:25.85},0).wait(1).to({skewX:1.3793},0).wait(1).to({skewX:1.4483,x:25.9},0).wait(1).to({skewX:1.5172},0).wait(1).to({skewX:1.5862,x:26},0).wait(1).to({skewX:1.6552},0).wait(1).to({skewX:1.7241,x:26.05},0).wait(1).to({skewX:1.7931,x:26.1,y:39.55},0).wait(1).to({skewX:1.8621,x:26.15},0).wait(1).to({skewX:1.931,x:26.2},0).wait(1).to({skewX:2},0).wait(1).to({skewX:1.9333},0).wait(1).to({skewX:1.8667,x:26.1},0).wait(1).to({skewX:1.8},0).wait(1).to({skewX:1.7333,x:26.05,y:39.6},0).wait(1).to({skewX:1.6667},0).wait(1).to({skewX:1.6,x:25.95},0).wait(1).to({skewX:1.5333},0).wait(1).to({skewX:1.4667,x:25.9},0).wait(1).to({skewX:1.4},0).wait(1).to({skewX:1.3333,x:25.8},0).wait(1).to({skewX:1.2667},0).wait(1).to({skewX:1.2,x:25.75},0).wait(1).to({skewX:1.1333},0).wait(1).to({skewX:1.0667,x:25.65},0).wait(1).to({skewX:1},0).wait(1).to({skewX:0.9333,x:25.6},0).wait(1).to({skewX:0.8667,x:25.55},0).wait(1).to({skewX:0.8,x:25.5},0).wait(1).to({skewX:0.7333},0).wait(1).to({skewX:0.6667,x:25.45},0).wait(1).to({skewX:0.6,x:25.4},0).wait(1).to({skewX:0.5333,x:25.35},0).wait(1).to({skewX:0.4667},0).wait(1).to({skewX:0.4,x:25.3},0).wait(1).to({skewX:0.3333,x:25.25},0).wait(1).to({skewX:0.2667,x:25.2},0).wait(1).to({skewX:0.2},0).wait(1).to({skewX:0.1333,x:25.15},0).wait(1).to({skewX:0.0667,x:25.1},0).wait(1).to({skewX:0,x:25.05,y:39.55},0).wait(1).to({skewX:-0.0667,y:39.6},0).wait(1).to({skewX:-0.1333,x:25},0).wait(1).to({skewX:-0.2,x:24.95},0).wait(1).to({skewX:-0.2667},0).wait(1).to({skewX:-0.3333,x:24.9},0).wait(1).to({skewX:-0.4,x:24.85},0).wait(1).to({skewX:-0.4667,x:24.8},0).wait(1).to({skewX:-0.5333},0).wait(1).to({skewX:-0.6,x:24.75},0).wait(1).to({skewX:-0.6667,x:24.7},0).wait(1).to({skewX:-0.7333,x:24.65},0).wait(1).to({skewX:-0.8},0).wait(1).to({skewX:-0.8667,x:24.6},0).wait(1).to({skewX:-0.9333,x:24.55},0).wait(1).to({skewX:-1,x:24.5},0).wait(1).to({skewX:-1.0667},0).wait(1).to({skewX:-1.1333,x:24.4},0).wait(1).to({skewX:-1.2},0).wait(1).to({skewX:-1.2667,x:24.35},0).wait(1).to({skewX:-1.3333},0).wait(1).to({skewX:-1.4,x:24.25},0).wait(1).to({skewX:-1.4667},0).wait(1).to({skewX:-1.5333,x:24.2},0).wait(1).to({skewX:-1.6},0).wait(1).to({skewX:-1.6667,x:24.1},0).wait(1).to({skewX:-1.7333},0).wait(1).to({skewX:-1.8,x:24.05,y:39.55},0).wait(1).to({skewX:-1.8667},0).wait(1).to({skewX:-1.9333,x:23.95},0).wait(1).to({skewX:-2},0).wait(1).to({skewX:-1.9333},0).wait(1).to({skewX:-1.8667,x:24.05},0).wait(1).to({skewX:-1.8},0).wait(1).to({skewX:-1.7333,x:24.1,y:39.6},0).wait(1).to({skewX:-1.6667},0).wait(1).to({skewX:-1.6,x:24.2},0).wait(1).to({skewX:-1.5333},0).wait(1).to({skewX:-1.4667,x:24.25},0).wait(1).to({skewX:-1.4},0).wait(1).to({skewX:-1.3333,x:24.35},0).wait(1).to({skewX:-1.2667},0).wait(1).to({skewX:-1.2,x:24.4},0).wait(1).to({skewX:-1.1333},0).wait(1).to({skewX:-1.0667,x:24.5},0).wait(1).to({skewX:-1},0).wait(1).to({skewX:-0.9333,x:24.55},0).wait(1).to({skewX:-0.8667,x:24.6},0).wait(1).to({skewX:-0.8,x:24.65},0).wait(1).to({skewX:-0.7333},0).wait(1).to({skewX:-0.6667,x:24.7},0).wait(1).to({skewX:-0.6,x:24.75},0).wait(1).to({skewX:-0.5333,x:24.8},0).wait(1).to({skewX:-0.4667},0).wait(1).to({skewX:-0.4,x:24.85},0).wait(1).to({skewX:-0.3333,x:24.9},0).wait(1).to({skewX:-0.2667,x:24.95},0).wait(1).to({skewX:-0.2},0).wait(1).to({skewX:-0.1333,x:25},0).wait(1).to({skewX:-0.0667,x:25.05},0).wait(1).to({skewX:0,y:39.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,4.8,36.6,69.7);


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
	this.instance.setTransform(23.8,72,1,0.9997,0,0,0,14.7,64.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.1,regY:31.5,skewX:0.2368,x:24.3,y:38.7},0).wait(1).to({skewX:0.4737,x:24.45},0).wait(1).to({skewX:0.7105,x:24.6},0).wait(1).to({skewX:0.9474,x:24.75},0).wait(1).to({skewX:1.1842,x:24.85},0).wait(1).to({skewX:1.4211,x:25},0).wait(1).to({skewX:1.6579,x:25.15},0).wait(1).to({skewX:1.8947,x:25.25,y:38.65},0).wait(1).to({skewX:2.1316,x:25.45},0).wait(1).to({skewX:2.3684,x:25.55,y:38.7},0).wait(1).to({skewX:2.6053,x:25.65},0).wait(1).to({skewX:2.8421,x:25.85},0).wait(1).to({skewX:3.0789,x:25.95},0).wait(1).to({skewX:3.3158,x:26.1,y:38.75},0).wait(1).to({skewX:3.5526,x:26.25},0).wait(1).to({skewX:3.7895,x:26.35,y:38.7},0).wait(1).to({skewX:4.0263,x:26.55,y:38.75},0).wait(1).to({skewX:4.2632,x:26.65},0).wait(1).to({skewX:4.5,x:26.8},0).wait(1).to({skewX:4.275,x:26.65},0).wait(1).to({skewX:4.05,x:26.55},0).wait(1).to({skewX:3.825,x:26.4,y:38.7},0).wait(1).to({skewX:3.6,x:26.25,y:38.75},0).wait(1).to({skewX:3.375,x:26.15},0).wait(1).to({skewX:3.15,x:26,y:38.7},0).wait(1).to({skewX:2.925,x:25.9},0).wait(1).to({skewX:2.7,x:25.75},0).wait(1).to({skewX:2.475,x:25.6},0).wait(1).to({skewX:2.25,x:25.45,y:38.65},0).wait(1).to({skewX:2.025,x:25.35},0).wait(1).to({skewX:1.8,x:25.2},0).wait(1).to({skewX:1.575,x:25.1,y:38.7},0).wait(1).to({skewX:1.35,x:24.95},0).wait(1).to({skewX:1.125,x:24.85},0).wait(1).to({skewX:0.9,x:24.7},0).wait(1).to({skewX:0.675,x:24.6},0).wait(1).to({skewX:0.45,x:24.45},0).wait(1).to({skewX:0.225,x:24.35},0).wait(1).to({skewX:0,x:24.15,y:38.65},0).wait(1).to({skewX:-0.225,x:24,y:38.7},0).wait(1).to({skewX:-0.45,x:23.9},0).wait(1).to({skewX:-0.675,x:23.75},0).wait(1).to({skewX:-0.9,x:23.65},0).wait(1).to({skewX:-1.125,x:23.5},0).wait(1).to({skewX:-1.35,x:23.4},0).wait(1).to({skewX:-1.575,x:23.25},0).wait(1).to({skewX:-1.8,x:23.15,y:38.65},0).wait(1).to({skewX:-2.025,x:23},0).wait(1).to({skewX:-2.25,x:22.9},0).wait(1).to({skewX:-2.475,x:22.75,y:38.7},0).wait(1).to({skewX:-2.7,x:22.6},0).wait(1).to({skewX:-2.925,x:22.45},0).wait(1).to({skewX:-3.15,x:22.35},0).wait(1).to({skewX:-3.375,x:22.2,y:38.75},0).wait(1).to({skewX:-3.6,x:22.1},0).wait(1).to({skewX:-3.825,x:21.95,y:38.7},0).wait(1).to({skewX:-4.05,x:21.8,y:38.75},0).wait(1).to({skewX:-4.275,x:21.7},0).wait(1).to({skewX:-4.5,x:21.55},0).wait(1).to({skewX:-4.275,x:21.7},0).wait(1).to({skewX:-4.05,x:21.8},0).wait(1).to({skewX:-3.825,x:21.95,y:38.7},0).wait(1).to({skewX:-3.6,x:22.1,y:38.75},0).wait(1).to({skewX:-3.375,x:22.2},0).wait(1).to({skewX:-3.15,x:22.35,y:38.7},0).wait(1).to({skewX:-2.925,x:22.45},0).wait(1).to({skewX:-2.7,x:22.6},0).wait(1).to({skewX:-2.475,x:22.75},0).wait(1).to({skewX:-2.25,x:22.9,y:38.65},0).wait(1).to({skewX:-2.025,x:23},0).wait(1).to({skewX:-1.8,x:23.15},0).wait(1).to({skewX:-1.575,x:23.25,y:38.7},0).wait(1).to({skewX:-1.35,x:23.4},0).wait(1).to({skewX:-1.125,x:23.5},0).wait(1).to({skewX:-0.9,x:23.65},0).wait(1).to({skewX:-0.675,x:23.75},0).wait(1).to({skewX:-0.45,x:23.9},0).wait(1).to({skewX:-0.225,x:24},0).wait(1).to({skewX:0,x:24.15,y:38.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,3.9,42.199999999999996,69.69999999999999);


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
	this.instance.setTransform(23.8,72,1,0.9997,0,0,0,14.2,64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:15.1,regY:31.5,skewX:0.6667,x:25.05,y:39.2},0).wait(1).to({skewX:1.3333,x:25.4},0).wait(1).to({skewX:2,x:25.8,y:39.15},0).wait(1).to({skewX:2.6667,x:26.2,y:39.2},0).wait(1).to({skewX:3.3333,x:26.55,y:39.25},0).wait(1).to({skewX:4,x:26.95},0).wait(1).to({skewX:4.6667,x:27.35,y:39.3},0).wait(1).to({skewX:5.3333,x:27.7},0).wait(1).to({skewX:6,x:28.1,y:39.35},0).wait(1).to({skewX:5.4,x:27.8,y:39.3},0).wait(1).to({skewX:4.8,x:27.4},0).wait(1).to({skewX:4.2,x:27.1,y:39.25},0).wait(1).to({skewX:3.6,x:26.7},0).wait(1).to({skewX:3,x:26.4,y:39.2},0).wait(1).to({skewX:2.4,x:26.05},0).wait(1).to({skewX:1.8,x:25.7,y:39.15},0).wait(1).to({skewX:1.2,x:25.35,y:39.2},0).wait(1).to({skewX:0.6,x:25},0).wait(1).to({skewX:0,x:24.65,y:39.15},0).wait(1).to({skewX:-0.6,x:24.35,y:39.2},0).wait(1).to({skewX:-1.2,x:24},0).wait(1).to({skewX:-1.8,x:23.65,y:39.15},0).wait(1).to({skewX:-2.4,x:23.3,y:39.2},0).wait(1).to({skewX:-3,x:22.95},0).wait(1).to({skewX:-3.6,x:22.65,y:39.25},0).wait(1).to({skewX:-4.2,x:22.25},0).wait(1).to({skewX:-4.8,x:21.95,y:39.3},0).wait(1).to({skewX:-5.4,x:21.55},0).wait(1).to({skewX:-6,x:21.25,y:39.35},0).wait(1).to({skewX:-5.4,x:21.55,y:39.3},0).wait(1).to({skewX:-4.8,x:21.95},0).wait(1).to({skewX:-4.2,x:22.25,y:39.25},0).wait(1).to({skewX:-3.6,x:22.65},0).wait(1).to({skewX:-3,x:22.95,y:39.2},0).wait(1).to({skewX:-2.4,x:23.3},0).wait(1).to({skewX:-1.8,x:23.65,y:39.15},0).wait(1).to({skewX:-1.2,x:24,y:39.2},0).wait(1).to({skewX:-0.6,x:24.35},0).wait(1).to({skewX:0,x:24.65,y:39.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,4.4,45.6,69.69999999999999);


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

	// Layer_3 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,0,0,4).p("A7NK5QAFAAAHABQAFAAAGAAQAGAAAGAAQE+gKEhlRQCViuBUitQABgCAAgCQBViuCWivQDbj/DqhEQAQgEAQgEQA8gOA+gCQAGAAAGAAQAHAAAEAAQE+AJEiFSQCWCvBUCuIA8BuQBQCEBeBtQEhFRE+AJQAFABAHAAQAGAAAGgBQASAAARgC");
	this.shape_1.setTransform(176.375,194.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(268));

	// Layer_11
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(-214.4,258.8,3.9447,3.9435,0,0,0,13.8,64);

	this.instance_1 = new lib.slow();
	this.instance_1.setTransform(-236.35,144.65,3.9447,3.9447,0,0,0,18.2,43.1);

	this.instance_2 = new lib.medium();
	this.instance_2.setTransform(-232.95,148.05,3.9447,3.9447,0,0,0,18.2,43.1);

	this.instance_3 = new lib.fast();
	this.instance_3.setTransform(-234.65,146.35,3.9447,3.9447,0,0,0,18.2,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},70).to({state:[{t:this.instance_3}]},42).to({state:[{t:this.instance_2}]},38).to({state:[{t:this.instance_1}]},40).to({state:[{t:this.instance}]},43).wait(16));

	// Layer_2
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(2.25,264.2,1,1,0,0,0,11.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({guide:{path:[2.3,264.2,2.8,264.2,3.4,264.3,4,264.3,4.6,264.3,5.2,264.3,5.8,264.3,37.5,263.3,66.5,229.6,81.4,212.2,89.7,194.9,89.8,194.7,89.9,194.5,98.3,177,113.4,159.5,135.2,134,158.7,127.3,160.2,126.9,161.8,126.5,167.9,125.1,174,124.9,174.7,124.9,175.3,124.9,175.8,124.9,176.4,124.9,208.1,125.8,237.1,159.5,252.1,177,260.5,194.5,263.6,200,266.6,205.5,274.6,218.7,284,229.6,312.8,263.3,344.6,264.2,345.2,264.3,345.9,264.3,346.5,264.3,347.1,264.2,348.8,264.2,350.5,264]}},267).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AbTUpMg2lAAAMAAAgpR");
	this.shape_2.setTransform(174.65,132.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(268));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.1,-4.6,714.9000000000001,280);


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
		
			}.bind(this));
		
		this.setProportion = function ()
		
		{
		
			var prop = (this.button.x - this.bar.x) / this.bar.nominalBounds.width;
		
			this.txt.x = this.button.x;
		
			this.txt.text = Math.round(prop * 100) + "%";
		
			//this.bar.gotoAndStop(Math.floor(this.bar.timeline.duration * prop));
			this.graph1.gotoAndStop(Math.floor(this.graph1.timeline.duration * prop))
			console.trace(this.graph1.timeline.duration * prop)
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// JS
	this.graph1 = new lib.Symbol22();
	this.graph1.name = "graph1";
	this.graph1.setTransform(408.45,185.6,0.6979,0.6979,0,0,0,174.8,132.2);

	this.timeline.addTween(cjs.Tween.get(this.graph1).wait(1));

	// Bar
	this.txt = new cjs.Text("38%", "8px 'Helvetica'", "#666666");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.lineWidth = 38;
	this.txt.parent = this;
	this.txt.setTransform(16.8,310.05);

	this.button = new lib.SliderButton();
	this.button.name = "button";
	this.button.setTransform(19.9,376.15);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.SliderButton(), 3);

	this.bar = new lib.SliderBar();
	this.bar.name = "bar";
	this.bar.setTransform(19.8,332.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.button},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,290.3,243.7,62.30000000000001);
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