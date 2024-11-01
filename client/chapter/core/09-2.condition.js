/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

//Logical AND assignment
a &&= b;
//a = a && b

// 논리합(또는) 연산자
let AorB = a || b;

console.log(AorB);

//Logical OR assignment
// a ||= b;
//a = a || b

// 부정 연산자
let reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;

let userName = prompt('누구십니까?');

if (userName.toLowerCase() == 'admin') {
  let passWord = prompt('비밀번호를 입력해주세요.');

  if (passWord.toLowerCase() == 'master') {
    console.log('환영합니다!');
  } else if (passWord == null) {
    console.log('취소되었습니다.');
  } else {
    console.log('인증에 실패했습니다.');
  }
} else if (userName == null) {
  console.log('취소되었습니다.');
} else {
  console.log('제대로된 값을 입력해주세요.');
}
