import gsap from 'gsap';

// ANIMATION LEAVE
// ANIMATE TO OPACITY ZERO 
// TARGET THE CONTAINER
// ON COMPLETE : DONE TO MAKE SURE THE ANIM IS OVER TO START THE OTHER ONE

//SHORTER WAY :
const animationLeave = (container) => {

    const activeLink = container.querySelector('a.is-active span');
    const images = container.querySelectorAll('.image');
    const img = container.querySelectorAll('img');
    
    const tl = gsap.timeline ({
        defaults: {
            duration: 0.4, ease: 'power1.in'
        }
    })

    tl
        .to(activeLink, {xPercent: 101}, 0)
        .to(images, {xPercent: 101, stagger: 0.05}, 0)
        .to(img, {xPercent: -101, stagger: 0.05}, 0);

    tl.timeScale(0.2);
    return tl;
}

export default animationLeave;