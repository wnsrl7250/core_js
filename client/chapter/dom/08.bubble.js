/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 
----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', function (e) {
  // console.log('%c section', 'color:dodgerblue');

  console.log('target : ', e.target); // 클릭된 대상
  console.log('currentTarget : ', e.currentTarget); // 이벤트가 걸린 대상
});

// article.addEventListener('click', () => {
//   console.log('%c article', 'color:hotpink');
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color:orange');
// });

/* 캡처링 
----------------------------------------------------------------- */
