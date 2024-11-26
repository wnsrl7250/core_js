import { getNode, setStorage, getStorage, deleteStorage } from './lib/index.js';

const textField = getNode('#textField');
const clearButton = getNode('button[data-name="clear"]');

// 1. 인풋 이벤트 바인딩
//     - 인풋(textarea) 태그 선택
//     - addEventListener('input',handler)
//     - handler 함수 안에서 값 가져오기 (this.value)

// 2. 인풋 값을 로컬 스토리지에 저장(타이핑 하는 순간 순간마다)
//     - setStorage(key,value)

// 3. init 함수 안에서 로컬스토리지에 있는 값을 가져와 인풋의 value로 설정
//     - getStorage
//     - text.value = value

// 4. 새로고침 => 데이터 유지

// 5. clear 버튼 클릭시 데이터 제거 (로컬스토리지, 인풋값)

function handleInput() {
  const value = this.value;
  setStorage('text', value);
}

function handleClear() {
  textField.value = '';
  deleteStorage('text');
}

function init() {
  getStorage('text').then((res) => (textField.value = res));
}

textField.addEventListener('input', handleInput);
clearButton.addEventListener('click', handleClear);

init();

//
//
//
//
//

// // 비동기 통신을 하는 이유?
// // - 서버에 있는 데이터를 가져오기 위해 왜?
// // - 포켓몬 정보를 보여주는 앱 서비스를
// // - 포켓몬 정보(?) => 포켓몬 api 주소 요청

// // 포켓몬 정보를 가져왔음 2s  Promise  -> async await

// // 가져온 정보를 화면에 랜더링

// // async : [무 조 건] 이행된 Promise 객체를 반환
// // await - result를 꺼낼 수 있음.
// //       ㄴ 코드 실행 흐름 제어

// const defaultOptions = {
//   headers:{
//     '.,..':'...'
//   },
//   body:null

// }

//   async function getData (options) {

//     const {url,...rest} = {...defaultOptions , ...options};

//     // fetch를 사용하면 Promise 객체가 리턴된다 -> result는 response 객체
//     const 응답 = await fetch(url,rest);

//     // 응답.json() => Promise 객체가 리턴된다 -> result Object
//     const data = await 응답.json()

//     return data
//   }

//   const monster = await getData({
//     url:'https://pokeapi.co/api/v2/pokemon/172',
//     method:'DELETE',
//     headers:{'Content-Type':'application/json'}
//   });

//   console.log( monster );

// // monster.then((res)=>{
// //   console.log( res );

// // })
