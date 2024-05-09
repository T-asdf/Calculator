import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState("0");

  function onClickButton(v) {
    
    // C 눌렀을 때 전체 값 초기화
    if (v === "C") {
      setValue("0");
      return;
    }
    
    // = 눌렀을 때 결과 출력 (eval)
    else if (v === "=") {
      try {
        setValue(`${eval(value)}`);
      }

      catch (error) {
        setValue("Error");
      }

      return;
    }

    // backspace 눌렀을 때 마지막 입력된 문자 지우기
    // 만약 남은 문자열의 길이가 1이라면 0으로 초기화
    else if (v === "backspace") {
      if (value.length === 1) {
        setValue("0");
      }
      
      else {
        setValue(value.slice(0, -1));
      }

      return;
    }
    
    // 첫 입력 시작할 때 처리
    else if (value === "0" || value == "Error") {
      if (v.startsWith("0")) {    // 이미 아무것도 입력 되어있지 않은데 0을 누를 경우 처리
        setValue("0.");
        return;
      }

      else if (v === ".") {     // 아무것도 입력 되어있지 않은데 .을 누를 경우 0.으로 처리
        setValue("0.");
        return;
      }
      
      setValue(v);
      return;
    }

    // 괄호 입력 시 닫음 처리하기
    else if (v === "(") {
      const openBracket = value.lastIndexOf("(");
      const closeBracket = value.lastIndexOf(")");
      const currentBracket = (openBracket !== -1 && openBracket > closeBracket) ? ")" : "("

      if (!["+", "-", "*", "/"].includes(value[value.length - 1]) && currentBracket === "(") {
        setValue(value + "*" + currentBracket);
        return;
      }

      setValue(value + currentBracket);
      return;  
    }

    else if (v === ".") {
      const lastDotIndex = value.lastIndexOf(".");
      const tempList = {};

      for (let operator of ['+', '-', '/', '*', '(', ')']) {
        tempList[operator] = value.lastIndexOf(operator);
      }

      const lastOperator = Object.keys(tempList).reduce((a, b) => tempList[a] > tempList[b] ? a : b);
      const lastOperatorIndex = value.lastIndexOf(lastOperator);
      
      // 이미 소수점 찍혀있는데 또 찍으려고 하면 return
      if (lastDotIndex > lastOperatorIndex) {
        return;
      }

      if (value[value.length - 1] === ".") {
        return;
      }

      // 정수 부분 없이 . 입력하면 0 추가
      if (["+", "-", "*", "/"].includes(value[value.length - 1])) {
        setValue(value + "0" + v);
        return;
      }
    }

    // 닫는 괄호 뒤 숫자 입력 시 곱하기 넣어주기
    else if (!["+", "-", "*", "/"].includes(v)) {
      if (value[value.length - 1] === ")") {
        setValue(value + "*" + v);
        return;
      }
    }

    setValue(value + v);
  }

  return (
    <div className="App">
      <Display value={value}/>
      <Buttons onClickButton={onClickButton} />
    </div>
  )
}

export default App
