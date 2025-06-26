gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !==1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
		
	})

	gsap.fromTo('.logo_section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: 'logo_section',
			start: '1',
			end: '1000',
			scrub: true
		}
	} )

	let itemsL = gsap.utils.toArray('.gallery_left .gallery__item')
	
	itemsL.forEach(item => {
		gsap.fromTo(item, {x: -200, opacity: 0 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-1200',
				end: '-420',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery_right .gallery__item')
	
	itemsR.forEach(item => {
		gsap.fromTo(item, {x: 200, opacity: 0 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-1000',
				end: '-420',
				scrub: true
			}
		})
	})

}