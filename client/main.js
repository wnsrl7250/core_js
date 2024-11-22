import {
  tiger,
  getNode,
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
} from './lib/index.js';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const userCardInner = getNode('.user-card-inner');

renderSpinner(userCardInner);

async function renderUserList() {
  try {
    const response = await tiger.get(END_POINT);

    // getNode('.loadingSpinner').remove()

    gsap.to('.loadingSpinner', {
      opacity: 0,
    });

    const data = response.data;

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      delay: 1,
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
  } catch {
    console.log('error!');
  }
}

renderUserList();

// 1. user 데이터 fetch 해주세요.

// 2. fetch 데이터 유저의 이름만 콘솔에 출력
