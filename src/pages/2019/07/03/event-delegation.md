---
title: Event Delegation(이벤트 위임)
date: 2019-07-03
tags: ["TIL", "2019"]
---

리스트의 상위 요소에 이벤트 핸들링을 위임해서 하위 항목에서 직접 이벤트를 추가하지 않아도 됨으로 메모리를 절약할 수 있다. 또한 이러한 디자인 패턴은 하위 항목에 요소가 추가되거나 제거될 때 이벤트를 새롭게 바인딩할 필요가 없어서 경제적이다.

```html
<nav id="menu">
  <h2>계절 메뉴</h2>
  <ul>
    <li><a href="#">봄</a></li>
    <li><a href="#">여름</a></li>
    <li><a href="#">가을</a></li>
    <li><a href="#">겨울</a></li>
  </ul>
</nav>
```

```javascript
// ES5
var menu = document.getElementById('menu');
menu.addEventListener('click', function () {
  if (event.target && event.target.tagName === 'A') {
    console.log(event.target.textContent);
  }
});

// ES6
const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  const { target } = event;
  if (target && target.tagName === 'A') {
    console.log(target.textContent);
  }
});
```
