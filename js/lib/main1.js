// ScrollMagic controller
var controller = new ScrollMagic.Controller();


//Landing page animation

var startTween = new TimelineMax()
				.to("#particles-js",20,{opacity:1});

var startTween2 = new TimelineMax()
				.to("#title #heading",1,{opacity:1})
				.to("#title #heading",1,{y:'-20px'},0)
				.to("#title #caption",1,{opacity:1})
				.to("#title #heading span",1,{opacity:1},1)
				.to("#title #caption",1,{y:'-20px'},1)

animateStartArrow = function(e, t, i) { var a = $(".intro-start-arrow"),
                    o = $(".intro-start-arrow path")[0],
                    s = o.getTotalLength(),
                    r = { progress: 1 };
                o.style.strokeDasharray = s + " " + s, o.style.strokeDashoffset = s, a.css("visibility", "visible"), e.fromTo(r, t, { progress: 1 }, { progress: 0, onUpdateParams: [o, r], onUpdate: function(e, t) { e.style.strokeDashoffset = t.progress * s }, ease: Quad.easeOut }, i) },

animateStartArrow(startTween2, .5, 2);

var w = $(window).width();

if(w > 750){

	// Idea Section animation

	var ideaHeading = new TimelineMax()
					.to("#idea #heading",1,{opacity:1})
					.to("#idea #caption",1,{opacity:1},2.5)
					.to("#idea #heading",1,{opacity:0},5)
					.to("#idea #caption",1,{opacity:0},5);;


	var ideaScene = new ScrollMagic.Scene({triggerElement:"#idea #trigger",duration:600,offset:0,triggerHook:0.4})
						.setPin("#idea #holder")
						.setTween(ideaHeading)
						// .addIndicators()					
						.addTo(controller);

	// About us animation

	var aboutHeading = new TimelineMax()
					.to("#about-us #heading",1.5,{opacity:1});
					// .to("#about-us #caption",1,{opacity:1},2);

	var aboutScene = new ScrollMagic.Scene({triggerElement:"#about-us #trigger",duration:400,offset:0,triggerHook:0.4})
						.setPin("#about-us #heading")
						.setTween(aboutHeading)
						// .addIndicators()
						.addTo(controller);

	// //Overview Section

	// var overview = new TimelineMax()
	// 				.to("#overview-sec #heading",1.5,{opacity:1})
	// 				.to("#overview-sec #caption",1,{opacity:1},2);

	// var overviewScene = new ScrollMagic.Scene({triggerElement:"#overview-sec #trigger",duration:300,offset:0,triggerHook:0.4})
	// 					.setPin("#overview-sec #heading")
	// 					.setTween(overview)
	// 					// .addIndicators()
	// 					.addTo(controller);


	// // Links animation

	// var linksTimeline = new TimelineMax()
	// 				.to('#overview',1,{opacity:1})
	// 				.to('#our-focus',1,{opacity:1})
	// 				.to('#our-offerings',1,{opacity:1});

	// var linksScene = new ScrollMagic.Scene({triggerElement:"#links #trigger",duration:400,triggerHook:0.4,offset:0,triggerHook:0.4})
	// 					 .setPin("#content-wrapper")
	// 					 .setTween(linksTimeline)
	// 					 // .addIndicators()
	// 					 .addTo(controller);



	// // Contact Us Animation

	// var contactHeading = new TimelineMax()
	// 				.to("#contact-us #heading",1.5,{opacity:1})
	// 				.to("#contact-us #caption",1,{opacity:1},2);

	// var contactScene = new ScrollMagic.Scene({triggerElement:"#contact-us #trigger",duration:300,offset:0,triggerHook:0.4})
	// 					.setPin("#contact-us #heading")
	// 					.setTween(contactHeading)
	// 					// .addIndicators()
	// 					.addTo(controller);


}






