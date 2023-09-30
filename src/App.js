import "./styles.css"
import { useReducer } from "react"

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload.digit}`,
      }
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )
  dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } })
  return (
    <div className="calculator-grid">
      hello world!
      <div className="output">
        Output here!
        <div className="previous-operand">
          {previousOperand} {operation}
          <div className="current-operand">{currentOperand}</div>
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
