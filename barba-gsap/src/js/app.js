import barba from '@barba/core';
import gsap from 'gsap';
import animationEnter from './animations/animationEnter';
import animationLeave from './animations/animationLeave';
import revealProject from './animations/revealProject';
import leaveToProject from './animations/leaveToProject';
import leaveFromProject from './animations/leaveFromProject';


///////// RECAP :

// CREATE 2 ARROW FUNCTION RETURNING SIMPLE G SAP TWEEN
// ANIM ENTER RETURN TWEEN THAT ANIMATES THE CONTAINER FROM INSIVIBLE TO OPACITY 1 (AUTOALPHA)
// ANIM LEAVE RETURN OPOSITE TRANSITION : ANIMATES CURRENT CONTAINER TO ALPHAZERO TO FADE IT OUT
// RUN THE 2 TWEENS INSIDE THE HOOK OF BARBA

//*******************************************************************************************

// USE GSAP SET TWEEN
// - 100 TO MOVE IT TO THE LEFT

const resetActiveLink = () => gsap.set('a.is-active span', {
    xPercent: -100,
    transformOrigin: 'left'
});

barba.hooks.enter(() => {
    console.log('enter');
    window.scrollTo(0, 0) // RESET THE TOP POSITION OF THE PAGE EVEYTIME ENTERING A PAGE // APPLY TO ALL 
})


//*******************************************************************************************

// CREATE THE FIRST TRANSITION
// USE ONCE HOOK TO PLAY TRANS
// PLAY ANIM ENTER
// NEXT CONTAINER = COMING INTO VIEW // GIVE THE DOM ELEM WANT TO FADE IN
// ONCE & ENTER = SAME ANIM
// DOC // BARBA HOOKS : LEAVE EFFECTS

//SHORTER WAY :
barba.init({
    transitions : [
        {
            name: 'detail',
            to: {
                namespace: ['detail']
            },
            once({next}) {
                console.log('here');
                revealProject(next.container)
            },
            leave: ({current}) => leaveToProject(current.container),
            enter({next}) {
                console.log('here ??');
                revealProject(next.container)
            }
        },
        {
            name: 'general-transition',
            once({next}) {
                resetActiveLink();
                gsap.from('header a', {
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                    onComplete: () => animationEnter(next.container)
                });
            },
            leave: ({current}) => animationLeave(current.container),
            enter({next}) {
                console.log('entering');
                animationEnter(next.container);
            }
        }, {
            name: 'from-detail', // NAME
            from: { // SPECIFIED WHEN TO USE IT FROM DETAIL
                namespace: ['detail']
            },
            leave: ({current}) => leaveFromProject(current.container), // USE THE LEAVEFROMPROJECT TIMELINE
            enter({next}) { // THEN ENTER WITH ALREADY USED ANIMATION ENTER
                gsap.from('header a', {
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                    onComplete: () => animationEnter(next.container)
                });
                animationEnter(next.container);
            }
        }

    ]
})

// THE SECOND ANIMATION OR HOOK DECLARE OVER RIDE THE FIRST ONE / LIKE STYLESHEET