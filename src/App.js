function App() {
  return (
    <div className="calculator-grid">
      hello world!
      <div className="output">
        below world!
        <div className="previous-operand">
          belooooooooowwww world!
          <div className="current-operand">123123</div>
        </div>
      </div>
      <button className="span-two" onClick={() => console.log("it's working")}>
        AC
      </button>
      <button>DEL</button>
      <button>÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two" onClick={() => console.log("tite")}>
        =
      </button>
    </div>
  )
}

export default App
