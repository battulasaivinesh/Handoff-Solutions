

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

animateStartArrow(startTween2, .5, 1.5);