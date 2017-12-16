var controller = new ScrollMagic.Controller();

var startTween = new TimelineMax()
				.to("#particles-js",20,{opacity:1});



var startTween2 = new TimelineMax()
				.to("#title #heading",1,{y:'-40px'})
				.to("#title #heading span",1,{opacity:1},0);
				



animateStartArrow = function(e, t, i) { var a = $(".intro-start-arrow"),
                    o = $(".intro-start-arrow path")[0],
                    s = o.getTotalLength(),
                    r = { progress: 1 };
                o.style.strokeDasharray = s + " " + s, o.style.strokeDashoffset = s, a.css("visibility", "visible"), e.fromTo(r, t, { progress: 1 }, { progress: 0, onUpdateParams: [o, r], onUpdate: function(e, t) { e.style.strokeDashoffset = t.progress * s }, ease: Quad.easeOut }, i) },

animateStartArrow(startTween2, .5, 1.5);


var w = $(window).width();

if(w > 750){

	// Idea Section animation

	var ideaHeading = new TimelineMax()
					.to("#idea #heading",1,{opacity:1})
					.to("#idea #caption",1,{opacity:1},2.5)
					.to("#idea #heading",1,{opacity:0},5)
					.to("#idea #caption",1,{opacity:0},5);


	var ideaScene = new ScrollMagic.Scene({triggerElement:"#idea #trigger",duration:600,offset:0,triggerHook:0.45})
						.setPin("#idea #holder")
						.setTween(ideaHeading)
						// .addIndicators()					
						.addTo(controller);

	// About us animation

	var aboutHeading = new TimelineMax()
					.to("#first #heading",1.5,{opacity:1})
					.to("#first #caption",1,{opacity:1},2.5)
					.to("#first-img",1,{opacity:0.9},2.5);

	var aboutScene = new ScrollMagic.Scene({triggerElement:"#first #trigger",duration:500,offset:0,triggerHook:0.4})
						.setPin("#first #heading")
						.setTween(aboutHeading)
						// .addIndicators()
						.addTo(controller);

	var aboutHeading1 = new TimelineMax()
					.to("#second #heading",1.5,{opacity:1})
					.to("#second #caption",1,{opacity:1},2.5)
					.to("#second-img",1,{opacity:0.9},2.5);

	var aboutScene1 = new ScrollMagic.Scene({triggerElement:"#second #trigger",duration:500,offset:0,triggerHook:0.4})
						.setPin("#second #heading")
						.setTween(aboutHeading1)
						// .addIndicators()
						.addTo(controller);

	var aboutHeading2 = new TimelineMax()
					.to("#third #heading",1.5,{opacity:1})
					.to("#third #caption",1,{opacity:1},2.5)
					.to("#third-img",1,{opacity:0.9},2.5);

	var aboutScene2 = new ScrollMagic.Scene({triggerElement:"#third #trigger",duration:500,offset:0,triggerHook:0.4})
						.setPin("#third #heading")
						.setTween(aboutHeading2)
						// .addIndicators()
						.addTo(controller);

	var aboutHeading3 = new TimelineMax()
					.to("#four #heading",1.5,{opacity:1})
					.to("#four #caption",1,{opacity:1},2.5)
					.to("#four-img",1,{opacity:0.9},2.5);

	var aboutScene3 = new ScrollMagic.Scene({triggerElement:"#four #trigger",duration:500,offset:0,triggerHook:0.4})
						.setPin("#four #heading")
						.setTween(aboutHeading3)
						// .addIndicators()
						.addTo(controller);


}






