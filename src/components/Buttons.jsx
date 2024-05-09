import "./Buttons.css";

export default function Buttons({ onClickButton}) {
  return (
    <div className="Buttons">
      <div className="gap row-1">
        <button className="cancel" onClick={() => {onClickButton("C")}}>C</button>
        <button className="symbol" onClick={() => {onClickButton("(")}}>( )</button>
        <button className="symbol" onClick={() => {onClickButton("backspace")}}>←</button>
        <button className="symbol" onClick={() => {onClickButton("/")}}>÷</button>
      </div>

      <div className="gap row-2">
        <button onClick={() => {onClickButton("7")}}>7</button>
        <button onClick={() => {onClickButton("8")}}>8</button>
        <button onClick={() => {onClickButton("9")}}>9</button>
        <button className="symbol" onClick={() => {onClickButton("*")}}>×</button>
      </div>

      <div className="gap row-3">
        <button onClick={() => {onClickButton("4")}}>4</button>
        <button onClick={() => {onClickButton("5")}}>5</button>
        <button onClick={() => {onClickButton("6")}}>6</button>
        <button className="symbol" onClick={() => {onClickButton("-")}}>-</button>
      </div>

      <div className="gap row-4">
        <button onClick={() => {onClickButton("1")}}>1</button>
        <button onClick={() => {onClickButton("2")}}>2</button>
        <button onClick={() => {onClickButton("3")}}>3</button>
        <button className="symbol" onClick={() => {onClickButton("+")}}>+</button>
      </div>

      <div className="gap row-5">
        <button onClick={() => {onClickButton("00")}}>00</button>
        <button onClick={() => {onClickButton(0)}}>0</button>
        <button onClick={() => {onClickButton(".")}}>.</button>
        <button className="symbol" onClick={() => {onClickButton("=")}}>=</button>
      </div>
    </div>
  );
}