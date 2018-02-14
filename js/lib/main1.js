// ScrollMagic controller
var controller = new ScrollMagic.Controller();


//Landing page animation

var startTween = new TimelineMax()
				.to("#particles-js",10,{opacity:1});

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
					.to("#about-us #heading",1.5,{opacity:1})
					.to("#about-us #caption",1,{opacity:1},2);

	var aboutScene = new ScrollMagic.Scene({triggerElement:"#about-us #trigger",duration:400,offset:0,triggerHook:0.4})
						.setPin("#about-us #heading")
						.setTween(aboutHeading)
						// .addIndicators()
						.addTo(controller);

	// Our Offer Title Animation

	var ourOfferHeading = new TimelineMax()
					.to("#our-offering #heading",1.5,{opacity:1});
					// .to("#our-offering #heading",1,{opacity:0},1.5);

	var ourOfferScene = new ScrollMagic.Scene({triggerElement:"#our-offering #trigger",duration:400,offset:0,triggerHook:0.4})
						.setPin("#our-offering #heading")
						.setTween(ourOfferHeading)
						// .addIndicators()
						.addTo(controller);

	// Our Offer One Animation

	var ourOfferHeadingOne = new TimelineMax()
					.to("#our-offering-one #heading",1.5,{opacity:1})
					.to("#our-offering-one #caption",1,{opacity:1},2);

	var ourOfferSceneOne = new ScrollMagic.Scene({triggerElement:"#our-offering-one #trigger",duration:400,offset:0,triggerHook:0.4})
						.setPin("#our-offering-one #heading")
						.setTween(ourOfferHeadingOne)
						// .addIndicators()
						.addTo(controller);


	// Our Offer Two Animation

	var ourOfferHeadingTwo = new TimelineMax()
					.to("#our-offering-two #heading",1.5,{opacity:1})
					.to("#our-offering-two #caption",1,{opacity:1},2);

	var ourOfferSceneTwo = new ScrollMagic.Scene({triggerElement:"#our-offering-two #trigger",duration:400,offset:0,triggerHook:0.4})
						.setPin("#our-offering-two #heading")
						.setTween(ourOfferHeadingTwo)
						// .addIndicators()
						.addTo(controller);

	// Our Offer Three Animation

	var ourOfferHeadingThree = new TimelineMax()
					.to("#our-offering-three #heading",1.5,{opacity:1})
					.to("#our-offering-three #caption",1,{opacity:1},2);

	var ourOfferSceneThree = new ScrollMagic.Scene({triggerElement:"#our-offering-three #trigger",duration:400,offset:0,triggerHook:0.4})
						.setPin("#our-offering-three #heading")
						.setTween(ourOfferHeadingThree)
						// .addIndicators()
						.addTo(controller);


	// Our Offer Four Animation

	var ourOfferHeadingFour = new TimelineMax()
					.to("#our-offering-four #heading",1.5,{opacity:1})
					.to("#our-offering-four #caption",1,{opacity:1},2);

	var ourOfferSceneFour = new ScrollMagic.Scene({triggerElement:"#our-offering-four #trigger",duration:400,offset:0,triggerHook:0.4})
						.setPin("#our-offering-four #heading")
						.setTween(ourOfferHeadingFour)
						// .addIndicators()
						.addTo(controller);

	// Add Ons

	var addHeading = new TimelineMax()
					.to("#add-ons #heading",1.5,{opacity:1})
					.to("#add-ons #caption",1,{opacity:1},2);

	var addScene = new ScrollMagic.Scene({triggerElement:"#add-ons #trigger",duration:400,offset:0,triggerHook:0.4})
						.setPin("#add-ons #heading")
						.setTween(addHeading)
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






