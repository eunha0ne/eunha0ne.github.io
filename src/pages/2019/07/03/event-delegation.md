---
title: Today I Learned　
date: 2019-07-03
tags: ["개인학습", "2019"]
---

## Event Delegation(이벤트 위임)
---
리스트의 상위 요소에 이벤트 핸들링을 위임하으로, 각각의 하위 항목에 직접 이벤트 리스너를 추가하지 않아도 돼서 메모리를 절약할 수 있다. 이러한 디자인 패턴은 하위 항목에서 요소가 추가되거나 제거될 때, 이벤트를 새롭게 바인딩할 필요가 없다.

##

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
