---
title: Today I Learned　
date: 2019-06-28
tags: ["개인학습", "2019"]
---

## Array.from()
---
Array.from() 메서드는 Array-like(유사 배열) 또는 Iterable(이터러블: 순회 가능한) 객체를 얇게 복사해서 새로운 배열로 반환한다. (ES6)

> Array.from(arrayLike[, mapFn[, thisArg]])

* arrayLike: 배열로 변환하고자 하는유사 배열 객체나 반복 가능한 객체
* mapFn(Opt): 배열의 모든 요소에 대해 호출할 맵핑 함수
* thisArg(Opt): mapFn 실행 시에 this로 사용할 값

```javascript
// [1] 기본 사용
Array.from('foo'); // ["f", "o", "o"]


// [2] 화살표 함수와의 조합
// Array.from() 메서드는 두번째 매개변수로 map 함수를 사용한다.
Array.from([1, 2, 3], x => x + x);      // [2, 4, 6]

// from() 메서드의 기본 length 속성은 1이다.
// 이를 변형해서 맵 함수와 연계하면 원하는 길이와 요소를 갖는 배열을 생성할 수 있다.
Array.from({ length: 5 }, (v, i) => i); // [0, 1, 2, 3, 4]


// [3] 시퀀스 생성기
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

range(0, 4, 1);   // [0, 1, 2, 3, 4]
range(1, 10, 2);  // [1, 3, 5, 7, 9]

// A부터 Z까지 알파벳 생성하기
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1)
  .map(x => String.fromCharCode(x));  // ["A", "B", "C", ..., "Z"]
```

### References

* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
