/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 15;

switch (a) {
  case 10:
    console.log('10');
    break;
  case 13:
    console.log('13');
    break;
  case 15:
    console.log('15');
    break;
  case 20:
    console.log('20');
    break;
  default:
    console.log('10,13,15,20 숫자가 없습니다.');
    break;
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LUNCH;

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */

console.clear();

// prompt를 통해 숫자를 입력받는다.(0 ~ 6)
// 받은 숫자를 사용해서 switch case
// 0:일 ~ 6:토

// 함수는 하나의 기능만을 수행하는 것 (클린코드)
// separation of concerns (관심사의 분리)

function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(num) {
  switch (num) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}
const today = getDay(getRandom(7));

// getDay함수를 가지고 주말인지 평일인지를 콘솔창에 보여주는 함수

function weekend() {
  // if (today.includes('토요일') || today.includes('일요일')) {
  //   return '오늘은 ${today}입니다. 주말입니다.';
  // } else {
  //   return '오늘은 ${today}입니다. 평일입니다.';
  // }

  return today.includes('토') || today.includes('일')
    ? `오늘은 ${today}요일 입니다. 주말입니다.`
    : `오늘은 ${today}요일 입니다. 평일입니다.`;
}

const day = weekend();
console.log(today);
console.log(day);
