# Calculator

<br />

<img src="https://github.com/T-asdf/Calculator/assets/86279096/89f8e87f-de76-4e06-9fed-39fd825dbcbc" />

> 사용 언어 : React.js

<br />
<br />

## ❗ 프로젝트 소개

+ 리액트로 작동하는 간단한 계산기 어플리케이션
+ 입력 필드인 `Display`, 버튼 부분인 `Buttons` 컴포넌트로 나누어 작성
+ eval() 함수 이용해 문자열로 된 수식 Js에서 자체적으로 계산

<br />
<br />

## ❗ 편의성을 위한 예외 처리

+ 괄호를 입력하기 전, 직전에 입력한 문자가 숫자라면 자동으로 곱하기 입력
+ 닫는 괄호를 입력한 후에 숫자를 입력하려고 하면 자동으로 곱하기 입력
+ 정수 부분을 입력하지 않고 . 을 찍으면 자동으로 0. 입력
+ 이미 소수점이 입력되어 있음에도 불구하고 또 다시 . 을 찍으면 return

<br />

[App.jsx](https://github.com/T-asdf/Calculator/blob/master/src/App.jsx) <br />
[App.css](https://github.com/T-asdf/Calculator/blob/master/src/App.css)

[Buttons.jsx](https://github.com/T-asdf/Calculator/blob/master/src/components/Buttons.jsx) <br />
[Buttons.css](https://github.com/T-asdf/Calculator/blob/master/src/components/Buttons.css)

[Display.jsx](https://github.com/T-asdf/Calculator/blob/master/src/components/Display.jsx) <br />
[Display.css](https://github.com/T-asdf/Calculator/blob/master/src/components/Display.css)
