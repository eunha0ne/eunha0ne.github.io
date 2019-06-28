---
title: TIL
date: 2019-06-27
tags: ["TIL", "2019"]
---

# TIL

Array.from() 메서드는 Array-like(유사 배열) 또는 Iterable(이터러블: 순회 가능한) 객체를 얇게 복사해서 새로운 배열로 반환한다. (ES6)

> Array.from(arrayLike[, mapFn[, thisArg]])

```javascript
Array.from('foo'); // ["f", "o", "o"]

// 화살표 함수와의 조합
Array.from([1, 2, 3], x => x + x);      // [2, 4, 6]
Array.from({ length: 5 }, (v, i) => i); // [0, 1, 2, 3, 4]

// 시퀀스 생성기
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

range(0, 4, 1);   // [0, 1, 2, 3, 4]
range(1, 10, 2);  // [1, 3, 5, 7, 9]

// A부터 Z까지 알파벳 생성
range(
  'A'.charCodeAt(0), 'Z'.charCodeAt(0), 1
).map(x => String.fromCharCode(x));
// ["A", "B", "C", ..., "Z"]
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
