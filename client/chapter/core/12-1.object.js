/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uuid: crypto.randomUUID(),
  name: 'min',
  email: 'wnsrl7250@gmail.com',
  isLogIn: false,
  permission: 'paid', // paid | free
};

// authentication
// authorization

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isLogIn);
console.log(authUser.permission);

//setter
console.log((authUser.permission = 'free'));

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// getter
console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isLogIn']);
console.log(authUser['permission']);

//setter
console.log((authUser['permission'] = 'paid'));

// 객체의 key만을 모아서 배열로 반환하는 객체의 static method는?

const keys = Object.keys(authUser);

// function getPropertiesKey(obj) {
//   let arr = [];

//   for (const key in obj) {
//     if (Object.hasOwn(obj, key)) {
//       arr.push(key);
//     }
//   }

//   return arr;
// }

// 객체의 key만을 모아서 배열로 반환하는 객체의 static method는?

const value = Object.values(authUser);

function getProperties(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(obj[key]);
    }
  }

  return arr;
}

// 객체의 key와 value를 하나의 쌍으로 묶어 배열로 반환하는 객체의 static method는?

const entries = Object.entries(authUser);

function getPropertiesEntries(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push([key, obj[key]]);
    }
  }

  return arr;
}

getPropertiesEntries(authUser);

// 프로퍼티 제거 or 삭제
// 제거(remove) or 삭제(delete)
//  비워두기       메모리 날림

//
function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(authUser, 'uuid');

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'tel'; // phone | tel

function createuser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty + '번호']: phone,
  };
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// shorthand properties
const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 순서(order)를 바꿀 수 없음. 변수명 내맘대로
const arr = [10, 100, 1000, 10_000];

// rest?
// 기본값 설정
const [a1, a2, a3, a4, a5 = 100_000] = arr;

console.log(a5);

const [first, second] = document.querySelectorAll('span');

console.log(first);
console.log(second);

// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[2];

console.clear();

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  김미리: 800,
  박혜미: 130,
  이성우: 400,
  명재휘: 80,
};

// 객체의 구조 분해 할당 : 순서가 상관 없음.
// 객체의 key와 변수의 이름이 동일해야 함. => 변수명 설정? 가능

// 기본값은 속성이 존재하지 않은 경우에만 사용됨
const { 박혜미: 박 = 100, 이성우: 이 = 200, 명재휘: 명 = 300, 김미리: 김 = 400 } = salaries;

const { 박혜미, 이성우, 명재휘, 김미리 } = salaries;

function createUserObject(obj) {
  console.log(obj);

  return { name: obj.name, age: obj.age, address: obj.address, phone: obj.phone, job: obj.job };
}

const data = {
  name: '심선범',
  age: 35,
  address: '중랑구',
  phone: '010-7169-0262',
  job: '강사',
};

const user = createUserObject(data);
