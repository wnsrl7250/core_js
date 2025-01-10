// named export           =>  import { getNode as $, insertLast } from '..'
// default export         =>  import ... from '..'

// import { getNode as $, getNodes } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';

// import clearContents from "./lib/dom/clearContents.js";

import { getNode as $, getNodes, typeError, insertLast, clearContents } from './lib/index.js';

function phase1() {
  // 1. input 선택하기
  // 2. input 이벤트 바인딩
  // 3. input의 value 값 가져오기
  // 4. 숫자 더하기
  // 5. result에 출력하기

  const first = $('#firstNumber');
  const second = $('#secondNumber');
  const result = $('.result');
  const clear = $('#clear');

  function handleInput() {
    const firstValue = Number(first.value);
    const secondValue = +second.value;
    const total = firstValue + secondValue;

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

function phase2() {
  const calculator = $('.calculator');
  const result = $('.result');
  const clear = $('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

phase2();
