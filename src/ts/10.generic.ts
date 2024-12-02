/* ⭐⭐⭐⭐⭐⭐⭐⭐ generic Type ⭐⭐⭐⭐⭐⭐⭐⭐ */

function sunFunc<T>(value: T): T {
  return value;
}

const a = sunFunc(10);
const b = sunFunc("hello");
const c = sunFunc(false);

/*

  T: Type
  U: Unknown or Unique
  K: Key
  V: Value
  E: Element
  R: Return

*/

function swapAtoB<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

swapAtoB(1, true); // [true,1]

function getLegth<T extends { length: number }>(data: T): number {
  return data.length;
}

const b1 = getLegth([1, 2, 3]); // 3
const b2 = getLegth("hi"); // 2
const b3 = getLegth({ name: "tiger", length: 3 }); // 3
