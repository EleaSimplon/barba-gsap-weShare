export {default as animationEnter} from './animationEnter';
export {default as animationLeave} from './animationLeave';
export {default as revealProject} from './revealProject';
export {default as leaveToProject} from './leaveToProject';
export {default as leaveFromProject} from './leaveFromProject';

// ONE WAY TO DO IT (LONGER): 
// const animationLeave = (container, done) => {
//     return gsap.to(container, { autoAlpha: 0, duration: 2, clearProps: 'all', ease: 'none', onComplete: () => done() })
// }

// barba.init({
//     transitions : [
//         {
//             once({next}) {
//                 animationEnter(next.container);
//             },
//             leave({current}) {
//                 console.log('leaving');
//                 const done = this.async();
//                 // NEED TO WAIT FOR THIS ANIMATION TO FINISH B4 ENTER ANIM PLAYS
//                 animationLeave(current.container, done);
//             },
//             enter({next}) {
//                 console.log('entering');
//                 animationEnter(next.container);
//             },
//         }
//     ]
// })