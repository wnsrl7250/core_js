import { getNode } from '../dom/getNode.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(()=>{
//   first.style.top = '-100px';

//   delay(()=>{
//     first.style.transform = 'rotate(360deg)'

//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })

//     second.style.transform = 'rotate(360deg)'
//   })
//   second.style.top = '100px';
// })

const shouldRejected = false;

const p = new Promise((성공, 실패) => {
  if (!shouldRejected) {
    성공('성공입니다~');
  } else {
    실패('실패입니다~');
  }
});

p.then((res) => {
  // console.log( res );
});

// promise 객체를 반환하는 함수 => 재사용

function delayP(shouldRejected, timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve('성공');
      } else {
        reject('실패');
      }
    }, timeout);
  });
}

delayP(false)
  .then((res) => {
    first.style.top = '-100px';
    return delayP(false);
  })
  .then((res) => {
    first.style.transform = 'rotate(360deg)';
    return delayP(false);
  })
  .then((res) => {
    first.style.top = '0px';
    return delayP(false);
  });
