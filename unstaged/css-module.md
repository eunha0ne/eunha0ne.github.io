---
title: CSS as module
date: 2020-01-27
tags: ['방법론', '요약', '2020']
---

> Replace “Can you build this” with “Can you maintain this without losing your minds?” - Nicolas Gallagher

화면을 개발할 때 “만들 수 있는가” 라는 물음을 “유지보수가 가능한가”로 바꾸어 생각하게 될 때 CSS 작성에는 난해한 점이 있다. 유지보수를 생각하지 않은 체 단순히 레이아웃을 그려나가는 것은 쉽지만, 반대로 그것을 잘 정돈된 상태로 작성하여, 향후 생산성을 위해서 기술 부채를 줄여나가는 일은 꽤나 어렵다. 여기에는 많은 고민이 필요하고, 체계가 필요하다. 그래서 효율적인 스타일 개발을 위해서 여러가지 방법론이 등장한 것이라 생각한다.

```html
<div class="box profile pro-user">
  <img class="avatar image" />
  <p class="bio">...</p>
</div>
```

위 코드를 살펴보면, 박스(div)안에 사용자의 아바타(img)와 바이오(p)가 담겨져 있는 것을 알 수 있다. 그렇지만 서로 어떤 연관성을 나타내는지 알 수 없기 때문에 클레스를 재사용하려고 할 때 어려움에 마주칠 수 있다. 

예를 들어, 위 코드를 다른 페이지에서 재사용하려고 할 때. 어떤 클래스를 가지고 가야 본래 페이지에 구현된 스타일을 그대로 구현할 수 있을까? 단순히 클레스를 복사해서 사용하면 되는 것일까? 그렇다면 어디서부터 어디까지 복사해야할까? 그리고 다음 페이지에서 본래 페이지의 스타일을 그대로 유지한 체 약간의 차이만 주려고 한다면 어떤 클레스를 빼거나 추가해야 될까?

이러한 이슈를 해결하기 위해서 모듈이라는 개념을 이해하고, 이를 바탕으로 하는 몇 가지 방법론을 공부할 필요가 있다고 생각한다.

* 클래스가 서로 어떤 연관성을 가지는지 알 수 없다면 ⇒ 재사용 어려움
  * 위 코드를 다른 페이지에서 재사용하려 할 때, 스타일이 해당 페이지에 종속되어 있는 문제에 마주하게 됨
* 해결 방법 ⇒ CSS 모듈화
  * OOCSS
  * BEM
  * SMACSS

## OOCSS: Object-oriented CSS

CSS를 객체지향적인 관점에서 바라보고 다루는 방법론으로 반복되는 패턴을 추상화해서 사이트 전반에 걸쳐 재사용하는 것에 중점을 두고 있다.

---

```html
<main id="main">
  <ul class="profile-wrapper">
    <li class="starter-user">...</li>
    <li class="pro-user">...</li>
  </ul>
</main>
```
먼저, 위와 같은 마크업 구조가 있다고 가정해 보자. `.profile-wrapper` 아래에 하위 노드로 `li`, 리스트 아이템이 존재할 때 스타일을 적용하려면 어떻게 해야할까? 멀티 페이지 애플리케이션 방식으로 개발되던 과거의 고전적인 방식을 따르자면 아마도 아래와 같은 코드가 작성될 것이다.

```css
#main .profile-wrapper { ... }
#main .profile-wrapper .starter-user { ... }
#main .profile-wrapper .pro-user { ... }
```
일정한 규칙을 가지고 정렬된 형태의 코드를 보여주지만, 이러한 방식은 객체지향적인 관점에서 작성되지 않은 것으로 보이며 향후 확장과 재사용성을 떨어트리고 있다. (Non-OOCSS)

예를 들어서, 위 코드는 `#main`이라는 아이디 값에 문맥적으로 종속되어 있기 때문에 그 외부에서 해당 스타일을 재사용하기 위해서는 수정이 필요한 불편한 점이 있다. 또한 특정도 값을 고려하지 않고 작성되었기 때문에 하위 개체, `.pro-user`를 외부에서 수정하려면 적어도 위와 동일하거나 더 높은 강도에서 재작성 되어야 한다. (불가피하게 !important 등의 속성이 필요할 수도 있다.)

그리고 무엇보다 `.starter-user`, `.pro-user` 이 두 개체는 리스트 아이템으로 공통적으로 가지고 있는 CSS 속성이 있을 것으로 합리적으로 추론해볼 수 있는데. 위와 같이 스타일을 작성하게 되면, 중복적으로 속성을 선언해야만 한다. 말인즉, 코드는 길어지고 가독성은 떨어진다. 이러한 코드가 많을 수록 개발 비용이 증가하게 됨으로 우리는 자주 사용되는 패턴을 추상화해서 중복 코드를 줄이고, 재사용 성을 높여나가도록 해야겠다.

```html
<main>
  <ul class="profile-wrapper">
    <li class="profile starter-user">...</li>
    <li class="profile pro-user">...</li>
    <li class="profile">...</li>
    <li class="profile event-user">...</li>
  </ul>
</main>
```
위 코드는, 앞서서 설명한 코드에서 OOCSS 방법론을 적용하려고 시도한 구조이다. 리스트 아이템에 `.profile` 이라는 클래스를 추가해서 `li`의 기본 스타일 구조를 정의했다. 이제 어떤 아이템을 추가하더라도 해당 속성만 추가하면 기본적인 형태를 바로 그릴 수 있다. 필요하다면 `.pro-user`, `.event-user` 등의 보조적인 의미로 사용되는 클레스를 추가해서 구별적인 형태를 갖출 수도 있다.

```scss
// 기본 스타일 정의 (Structure)
.profile { ... }

// 정의된 기본 스타일에 스킨 추가 (Theming)
.starter-user { ... }
.pro-user { ... }
```

그리고 위와 같이 선행되는 클레스나 아이디 셀렉터를 제거 함으로써, 문맥적인 독립을 이루었다. 이제 애플리케이션의 어느 페이지에서도 위 클레스를 사용하기만 한다면 동일한 스타일을 표현할 수 있게되었다. 동시에 특정도 값도 낮춘 덕분에 외부에서 접근해서 수정할 때에도 기존보다 더 적은 비용이 든다.

* 문맥적 독립 (Context-indefendent)
  * 객체가 놓여진 문맥적 위치에 기반하여 스타일링 하지 않기. 객체는 어디에 위치하든지 동일하게 보여야 함
* 스킨 형태로 구현하기 (Theming)
  * 다양한 형태로 스타일을 수정할 수는 있겠지만 화면에 어떻게 보이던지 마크업 구조는 동일해야 함
* 클레스 선택자 사용
  * 아이디 선택자는 특정도 값이 너무 강력해서 스타일 수정을 방해하기 때문에 사용하지 않음
  * 태그 선택자는 마크업 구조가 변경됐을 때, CSS를 다시 수정해야 하는 문제가 발생할 수 있음

## BEM: Block, Element, Modifier

모듈화를 통해서 웹 페이지 개발을 하는 방법론으로 웹 인터페이스를 독립적인 부품인 컴포넌트로 나누어 개발하는 것을 말한다.

---

* 블록: Blocks
  * 페이지 상에서 기능적이며 논리적으로 독립된 컴포넌트 (화면 구성 단위)
  * 중첩 될 수 있고, 반복 가능 함
* 엘리먼트: Elements
  * 블록을 구성하는 부품으로 블록 엘리먼트는 블록 종속된 상태로 존재 함.
* 모디파이어: Modifier (Theme)
  * 블록의 외형과 행동 상태를 정의함

```scss
.block-name {
  // ...블록(컴포넌트) 정의
}

.block-name__element {
  // ...블록의 구성요소 정의
}

.block-name__element—-modifier {
  // ...외형 및 상태 정의
}
```

* 코드가 그 자체로 문서화 됨 (Self Documenting) ⇒ 읽는 사람의 이해를 도움
* 중첩 CSS에서 벗어날 수 있음 ⇒ 가독성 향상, 

## SMACSS: Scalable Modular Architecture for CSS

OOCSS와 BEM을 토대로 발전한 방법론으로 그 사용에 따라 분류해서 다루는 개발 방식. 총 다섯가지 형태로 분류하여 구분 함

- Categories
  1. [Base](#Base)
  2. Layout
  3. Modules
  4. State
  5. Theme

### Base

- HTML 엘리먼트에 대한 기본 상태를 정의

### Layout

- 페이지를 각 구역으로 나누는 레이아웃을 정의
- 레이아웃은 하나 이상의 모듈을 가질 수 있음
- 오직, 레이아웃만 정의 함. (색상이나 폰트 정의를 하지 않음)

### Modules

- 오브젝트 또는 블록으로서 정의 됨
- 재사용이 가능한 조립식 파츠(Modular parts)

### State

- 모듈이나 레이아웃이 특정 상태에서 어떻게 보일지 정의

### Theme

- 테마가 적용 됐을 때, 모듈이나 레이아웃이 어떻게 보일지 정의

```scss
.l-box {
  // ...레이아웃 정의
}

.m-profile {
  // ...모듈 정의

  &—-is-pro-user {
    // ...상태 정의
  }
}
```

```html
<div class="m-profile m-profile—-is-pro-user l-box">
  <img class="m-profile__avatar l-image" />
  <p class="m-profile__bio">...내용</p>
</div>
```

## 참고

- [https://spaceninja.com/2018/09/18/what-is-modular-css/](https://spaceninja.com/2018/09/18/what-is-modular-css/)
- [http://smacss.com/](http://smacss.com/)
