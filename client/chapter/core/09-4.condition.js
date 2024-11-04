/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null ? 'user@company.io' : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

// console.log(0 || WIDTH);
// console.log(0 ?? WIDTH);

// console.log(undefined || WIDTH);
// console.log(undefined ?? WIDTH);

// console.log(isActive || WIDTH);
// console.log(isActive ?? WIDTH);

// console.log('' || WIDTH);
// console.log('' ?? WIDTH);

// a ||= b a가 false일때 b의 값을 a에 할당
// a &&= b a가

// 여러분들이 온라인 쇼핑몰의 구매 기능을 구현하고 싶다...

// 1. 사용자 (user) 상태
// - 회원 / 비회원
// - 회원 => 일반 / 프리미엄

// 2. 할인 규칙
// - 모든 사용자(회원, 비회원) 첫 구매 시 5% 할인이 적용됩니다.
// - 일반 회원은 두 번째 구매부터 10% 할인을 받습니다.
// - 프리미엄 회원은 항상 20% 할인을 받습니다.
// - 비회원은 두 번째 구매부터 할인을 받을 수 없습니다.

// 3. 추가 조건
// - 구매 금액이 2만원 이상일 경우, 추가로 5% 할인이 부여됩니다.

// function discountPrice(userState, count, price) {
//   let discountRate = 0;

//   switch (userState) {
//     case '회원':
//       discountRate = count === 1 ? 0.95 : 0.9;
//       break;
//     case '비회원':
//       discountRate = count === 1 ? 0.95 : 1;
//       break;
//     case '프리미엄 회원':
//       discountRate = count === 1 ? 0.75 : 0.8;
//       break;
//   }

//   if (price >= 20000) {
//     discountRate -= 0.05;
//   }

//   return price * discountRate;
// }

// console.log(discountPrice('프리미엄 회원', 1, 23500));

function discountPrice(userState, count, price) {
  let discount = 0;

  if (count === 1) {
    discount += 5;
  }

  if (userState === '프리미엄 회원') {
    discount += 20;
  } else if (userState === '일반 회원' && count > 1) {
    discount += 10;
  } else if (userState === '비회원' && count > 1) {
    discount += 0;
  }

  if (price >= 20000) {
    discount += 5;
  }

  // const totalPrice = price - (price * (discount * 0.01));
  const totalPrice = price * (1 - discount / 100);

  return totalPrice;
}

console.log(discountPrice('프리미엄 회원', 3, 23500));
// 16450
