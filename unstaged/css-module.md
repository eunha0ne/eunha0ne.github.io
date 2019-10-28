---
title: CSS as module
date: 2019-05-16
tags: ['요약', '2019']
---

> Replace “Can you build this” with “Can you maintain this without losing your minds?” - Nicolas Gallagher

화면을 개발할 때 “만들 수 있는가” 라는 물음을 “유지보수가 가능한가”로 바꾸어 생각하게 될 때 CSS 작성에는 난해한 점이 있음.

```html
<div class="“box" profile pro-user”>
  <img class="“avatar" image” />
  <p class="“bio”">...</p>
</div>
```

- 위 예제에서는 클래스가 서로 어떤 연관성을 가지는지 알 수 없음 ⇒ 재사용 어려움
  - 위 코드를 다른 페이지에서 재사용하려 할 때, 스타일이 해당 페이지에 종속되어 있는 문제에 마주하게 됨
- 해결 방법 ⇒ CSS 모듈화
  - OOCSS
  - BEM
  - SMACSS

## OOCSS: Object-oriented CSS

CSS를 객체지향적인 관점에서 바라보고 다루는 방법론으로 반복되는 패턴을 추상화해서 사이트 전반에 걸쳐 재사용하는 것에 중점을 두고 있음

- 독립성 (Context-indefendent)
  - 객체가 놓여진 위치에 기반하여 스타일링 하지 않는다. 객체는 어디에 위치하든지 동일하게 보여야 함
- 스킨 형태로 구현 (Theming)
  - 다양한 형태로 스타일을 수정할 수는 있겠지만 화면에 어떻게 보이던지 마크업 구조는 동일해야 함
- 클레스 선택자 사용
  - 아이디 선택자는 특정도 값이 너무 강력해서 스타일 수정을 방해하기 때문에 사용하지 않음
  - 태그 선택자는 마크업 구조가 변경됐을 때, CSS를 다시 수정해야 하는 문제가 발생할 수 있음

```scss
/**
  * <div class=“profile pro-user” />
  */

.profile {
  // ...스타일 정의
}

.pro-user {
  // ...정의된 기본 스타일에 스킨 추가
}
```

## BEM: Block, Element, Modifier

모듈화를 통해서 웹 페이지 개발을 하는 방법론으로 웹 인터페이스를 독립적인 부품인 컴포넌트로 나누어 개발하는 것을 말함. 각각의 컴포넌트는 자신을 위한 개발 영역(Develoment cycle)를 갖고 있음.

- 블록: Blocks
  - 페이지 상에서 기능적이며 논리적으로 독립된 컴포넌트 (화면 구성 단위)
  - 중첩 될 수 있고, 반복 가능 함
- 엘리먼트: Elements
  - 블록을 구성하는 부품으로 블록 엘리먼트는 블록 외부에서는 존재할 수 없음
- 모디파이어: Modifier (Theme)
  - 블록의 외형과 행동 상태를 정의함

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

- 코드가 그 자체로 문서화 됨 (Self Documenting) ⇒ 읽는 사람의 이해를 도움
- 중첩 CSS에서 벗어날 수 있음 ⇒ 가독성 향상

## SMACSS: Scalable Modular Architecture for CSS

OOCSS와 BEM을 토대로 발전한 방법론으로 앞서서 소개된 컴포넌트를 그 사용에 따라 분류해서 다루는 개발 방식. 총 다섯가지 형태로 분류하여 구분 함

- Categories
  1. Base
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
<div class="“l-box" m-profile m-profile—-is-pro-user”>
  <img class="“m-avatar" m-profile__image” />
  <p class="“m-profile__bio”">...내용</p>
</div>
```

## 참고

- [https://spaceninja.com/2018/09/18/what-is-modular-css/](https://spaceninja.com/2018/09/18/what-is-modular-css/)
- [http://smacss.com/](http://smacss.com/)