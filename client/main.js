import data from './data/data.js';
import { getRandom, insertLast, getNode as $, clearContents } from './lib/index.js';

// [phase-1]

// 1. 주접 떨기 버튼을 클릭 하는 함수
//   - 주접 떨기 버튼 가져오기
//   - 이벤트 연결

// 2. input 값 가져오기
//   - 콘솔에 출력

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');

// 3. data 함수에서 주접 1개 꺼내기
//    - n번째 random 주접을 꺼내기
//    - Math.random()

// 4. result에 랜더링하기
//    - insertLast()

function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  clearContents(result);
  insertLast(result, pick);
}

submit.addEventListener('click', handleSubmit);
